const Router = artifacts.require('IUniswapV2Router02');
const Factory = artifacts.require('contracts/UniswapV2/interfaces/IUniswapV2Factory.sol:IUniswapV2Factory');
const IUniPair = artifacts.require('contracts/UniswapV2/interfaces/IUniswapV2Pair.sol:IUniswapV2Pair');
const IERC20 = artifacts.require('contracts/interfaces/IERC20.sol:IERC20');
const WPOLIS = artifacts.require('contracts/UniswapV2/interfaces/IWETH.sol:IWETH');
const AccessControl = artifacts.require('HadesAccessControls');
const BoringFactory = artifacts.require('DeployerFactory');
const TokenFactory = artifacts.require('StyxTokenFactory');
const MintableToken = artifacts.require('MintableToken');
const FixedToken = artifacts.require('FixedToken');
const GovernanceToken = artifacts.require('GovernanceToken');
const PointList = artifacts.require('PointList');
const ListFactory = artifacts.require('ListFactory');
// const DutchAuction = artifacts.require('DutchAuction');
const Crowdsale = artifacts.require('Crowdsale');
// const BatchAuction = artifacts.require('BatchAuction');
// const HyperbolicAuction = artifacts.require('HyperbolicAuction');
const AuctionFactory = artifacts.require('JudgesMarket');
const LiquidityLauncher = artifacts.require('LiquidityLauncher');
const LiquidityFactory = artifacts.require('HadesPalaceLauncher');
const Mock = artifacts.require('ERC20Mock');

const { expectRevert, time } = require('@openzeppelin/test-helpers');


// requires mainnet olympus forking
// use hardhat test test/IDOFork.js

contract('IDO v1', ([alice, bob, carol, feer, operator, wato, admin, deployer, divi]) => {
    beforeEach(async () => {
        this.factory = await Factory.at('0x4523ad2e05c455d0043910c84c83236a6c98b40b');
        this.wpolis = await WPOLIS.at('0x6FC851B8D66116627Fb1137b9D5FE4E2e1BeA978');
        this.router = await Router.at('0x103ce09bE9eF5cc13c0904ec5D64Ff6c4cba5fb9');
        this.zeroAddress = '0x0000000000000000000000000000000000000000';


        // Deploy all contracts

        // access control
        this.accessControl = await AccessControl.new({from: deployer});
        await this.accessControl.initAccessControls(deployer, {from: deployer});
        await this.accessControl.addOperatorRole(operator, {from: deployer});

        if(!(await this.accessControl.hasAdminRole(admin))){
            await this.accessControl.addAdminRole(admin, {from: deployer});
        }
        if(!(await this.accessControl.hasAdminRole(deployer))){
            await this.accessControl.addAdminRole(deployer, {from: deployer});
        }

        // token factory
        this.tokenFactory = await TokenFactory.new({from: deployer});
        await this.tokenFactory.initHadesTokenFactory(this.accessControl.address, {from: deployer});
        this.fixedtoken = await FixedToken.new({from:deployer});
        this.mintabletoken = await MintableToken.new({from:deployer});
        this.governancetoken = await GovernanceToken.new({from:deployer});
        await this.tokenFactory.addTokenTemplate(this.mintabletoken.address, {from:deployer});
        await this.tokenFactory.addTokenTemplate(this.fixedtoken.address, {from:deployer});
        await this.tokenFactory.addTokenTemplate(this.governancetoken.address, {from:deployer});

        // auction factory
        this.boringFactory = await BoringFactory.new({from: deployer});
        this.crowdsale = await Crowdsale.new({from: deployer});
        // this.dutchauction = await DutchAuction.new({from: deployer});
        // this.hyperbolicauction = await HyperbolicAuction.new({from: deployer});
        // this.batchauction = await BatchAuction.new({from: deployer});
        this.auctionFactory = await AuctionFactory.new({from: deployer});
        await this.auctionFactory.initHadesMarket(this.accessControl.address, this.boringFactory.address,
            [this.crowdsale.address], {from:deployer});

        // pointlist
        this.pointlist = await PointList.new({from: deployer});
        this.listFactory = await ListFactory.new({from: deployer});
        await this.listFactory.initListFactory(this.accessControl.address, this.pointlist.address, 0);

        // liquidity launcher
        this.postauctionlauncher = await LiquidityLauncher.new(this.wpolis.address, {from: deployer});
        this.liquidityFactory = await LiquidityFactory.new({from: deployer});
        await this.liquidityFactory.initHadesLauncher(this.accessControl.address, this.wpolis.address, this.boringFactory.address, {from: deployer});
        await this.liquidityFactory.addLiquidityLauncherTemplate(this.postauctionlauncher.address, {from: deployer});

        // unlock the contracts
        await this.tokenFactory.setLocked(false, {from: deployer});
        await this.auctionFactory.setLocked(false, {from: deployer});
        await this.liquidityFactory.setLocked(false, {from: deployer});

        // require payment
        await this.tokenFactory.setMinimumFee('1000000000000000000', {from: deployer})
        await this.tokenFactory.setDividends(divi, {from: deployer})
        await this.auctionFactory.setMinimumFee('1000000000000000000', {from: deployer})
        await this.auctionFactory.setDividends(divi, {from: deployer})
        await this.liquidityFactory.setMinimumFee('1000000000000000000', {from: deployer})
        await this.liquidityFactory.setDividends(divi, {from: deployer})
        // payment token
        this.token = await Mock.new('NAME', 'SYMBOL', '3000000000000000000', {from: carol});
        await this.tokenFactory.setPaymentToken(this.token.address, {from: deployer})
        await this.auctionFactory.setPaymentToken(this.token.address, {from: deployer})
        await this.liquidityFactory.setPaymentToken(this.token.address, {from: deployer})


    });

    it('SoulToken + Crowdsale + LiquidityLauncher', async () => {

        // console.log('startying time ' + (await time.latest()));
        // let time = await time.latest()
        let timestamp = Math.floor(Date.now() / 1000) + 100;
        let timestamp5 = Math.floor(Date.now() / 1000) + 1000;
        // STEP1: Deploy and mint token with carol
        // get template id
        let tid = await this.tokenFactory.getTemplateId(this.governancetoken.address);
        console.log("token template id: ", tid.toString());
        // get init data
        let data =  await this.governancetoken.getInitData("SOUL Token", "SOUL", carol, '2000000000000000000000');
        await this.token.approve(this.tokenFactory.address, '1000000000000000000', {from: carol})

        // create
        let tx = await this.tokenFactory.createToken(tid, carol, data, {from: carol});
        let tokenAddress = tx.logs[1].args.addr;


        // STEP2: Approve token to auctionFactory
        let token = await IERC20.at(tokenAddress);
        await token.approve(this.auctionFactory.address, '10000000000000000000000000', {from: carol});
        // console.log((await token.balanceOf(carol)).toString());
        // console.log((await token.allowance(carol, this.auctionFactory.address)).toString());

        // STEP3: Deploy Crowdsale
        // get template id
        tid = await this.auctionFactory.getTemplateId(this.crowdsale.address);
        console.log("crowdsale template id: ", tid.toString());
        // get init data
        data = await this.crowdsale.getCrowdsaleInitData(this.auctionFactory.address, tokenAddress, '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            '1000000000000000000000', timestamp, timestamp5, '10000000000000000', '1000000000000000000', carol, this.zeroAddress,
            carol);
        await this.token.approve(this.auctionFactory.address, '1000000000000000000', {from: carol})
        // create
        tx = await this.auctionFactory.createMarket(tid, tokenAddress, '1000000000000000000000', this.zeroAddress, data, {from: carol});
        let crowdsaleAddress = tx.logs[0].args.addr;


        // STEP: Approve to liquidityFactory
        await token.approve(this.liquidityFactory.address, '10000000000000000000000000', {from: carol});
        // console.log((await token.balance).toString());

        // STEP: Create Launcher
        // get template id
        tid = await this.liquidityFactory.getTemplateId(this.postauctionlauncher.address);
        console.log("launcher template id: ", tid.toString());
        // get init data
        data = await this.postauctionlauncher.getLauncherInitData(crowdsaleAddress, this.factory.address, carol, carol, 900, 1000);
        await this.token.approve(this.liquidityFactory.address, '1000000000000000000', {from: carol})
        // create
        tx = await this.liquidityFactory.createLauncher(tid, tokenAddress, '1000000000000000000000', this.zeroAddress, data, {from: carol});
        let launcherAddress = tx.logs[0].args.addr;
        console.log('2', (await this.token.balanceOf(divi)).toString() )


        // STEP: Set Crowdsale wallet to launcher
        let crowdsale = await Crowdsale.at(crowdsaleAddress);
        await crowdsale.setAuctionWallet(launcherAddress, {from: carol});


        await time.increaseTo(timestamp);


        // bob buys 100 tokens with 1 eth
        tx = await crowdsale.commitEth(bob, true, {from: bob, value: '1000000000000000000'});

        assert.equal((await crowdsale.tokensClaimable(bob)).toString(), '100000000000000000000')


        // wato buys 800 tokens with 8 eth
        tx = await crowdsale.commitEth(wato, true, {from: wato, value: '8000000000000000000'});
        assert.equal((await crowdsale.tokensClaimable(wato)).toString(), '800000000000000000000')

        // alice buys 100
        tx = await crowdsale.commitEth(alice, true, {from: alice, value: '1000000000000000000'});
        assert.equal((await crowdsale.tokensClaimable(alice)).toString(), '100000000000000000000')


        // after running out of coins no one can buy
        await crowdsale.commitEth(feer, true, {from: feer, value: '1000000000000000000'});
        assert.equal((await crowdsale.tokensClaimable(feer)).toString(), '0')


        // Goal has been reached, we can create the liquidity
        let balanceBefore = await web3.eth.getBalance(carol);
        let launcher = await LiquidityLauncher.at(launcherAddress);
        await launcher.finalize({from: carol});

        let pairAddr = await IUniPair.at((await launcher.tokenPair()));


        console.log((await pairAddr.balanceOf(launcherAddress)).toString());
        console.log((await pairAddr.totalSupply()).toString());
        console.log((await pairAddr.getReserves())[0].toString());
        console.log((await pairAddr.getReserves())[1].toString());


        // users claim
        await crowdsale.withdrawTokens(bob, {from: bob});
        await crowdsale.withdrawTokens(alice, {from: alice});
        await crowdsale.withdrawTokens(wato, {from: wato});

        assert.equal((await token.balanceOf(wato)).toString(), '800000000000000000000')
        assert.equal((await token.balanceOf(alice)).toString(), '100000000000000000000')
        assert.equal((await token.balanceOf(bob)).toString(), '100000000000000000000')


        // funder claims?

        // let prevBalance = await web3.eth.getBalance(crowdsale.address);
        // console.log('ethBalacne ', prevBalance.toString())
        console.log((await token.balanceOf(carol)).toString())

        await launcher.withdrawDeposits({from: carol});

        let balanceAfter = await web3.eth.getBalance(carol);
        console.log(balanceBefore.toString(), balanceAfter.toString())
        console.log((await token.balanceOf(carol)).toString())


        // await time.increase(300);
        // await time.advanceBlockTo('99');


        // assert.equal((await this.shop.owner()), alice)
        // assert.equal((await this.shop.USD()), this.dai.address)
        // assert.equal((await this.shop.WPOLIS()), this.wpolis.address)
        // assert.equal((await this.shop.router()), this.router.address)
    });

});

