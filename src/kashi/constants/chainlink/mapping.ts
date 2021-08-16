import { ChainId } from 'hadeswap-beta-sdk'

export type ChainlinkMappingList = {
    readonly [address: string]: {
        from: string
        to: string
        decimals: number
        fromDecimals: number
        toDecimals: number
        warning?: string
        address?: string
    }
}

export const CHAINLINK_MAPPING: { [chainId in ChainId]?: ChainlinkMappingList } = {
    [ChainId.MAINNET]: {
        '0x72AFAECF99C9d9C8215fF44C77B94B99C28741e8': {
            from: '0x111111111117dC0aa78b770fA6A738034120C302',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xc929ad75B72593967DE83E7F7Cda0493458261D9': {
            from: '0x111111111117dC0aa78b770fA6A738034120C302',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x6Df09E975c830ECae5bd4eD9d90f3A95a4f88012': {
            from: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x547a514d5e3769680Ce22B2361c10Ea13619e8a9': {
            from: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x231e764B44b2C1b7Ca171fa8021A24ed520Cde10': {
            from: '0xADE00C28244d5CE17D72E40330B1c318cD12B7c3',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        // akro-usd
        '0xB23D105dF4958B4b81757e12f2151B5b5183520B': {
            from: '0x8Ab7404063Ec4DBcfd4598215992DC3F8EC853d7',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x89c7926c7c15fD5BFDB1edcFf7E7fC8283B578F6': {
            from: '0xa1faa113cbE53436Df28FF0aEe54275c13B40975',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x8797ABc4641dE76342b8acE9C63e3301DC35e3d8': {
            from: '0xfF20817765cB7f73d4bde2e66e067E58D11095C2',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x7eed379bf00005CfeD29feD4009669dE9Bcc21ce': {
            from: '0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x8f83670260F8f7708143b836a2a6F11eF0aBac01': {
            from: '0xa117000000f279D81A1D3cc75430fAA017FA5A2e',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xA6BCac72431A4178f07d016E1D912F56E6D989Ec': {
            from: '0xA9B1Eb5908CfC3cdf91F9B8B3a74108598009096',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x58921Ac140522867bf50b9E009599Da0CA4A2379': {
            from: '0x3472A5A71965499acd81997a54BBA8D852C6E53d',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xC1438AA3823A6Ba0C159CfA8D98dF5A994bA120b': {
            from: '0xba100000625a3754423978a60c9317c58a424e3D',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x0BDb051e10c9718d1C29efbad442E88D38958274': {
            from: '0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x919C77ACc7373D000b329c1276C76586ed2Dd19F': {
            from: '0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x0d16d4528239e9ee52fa531af613AcdB23D88c94': {
            from: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xCf61d1841B178fe82C8895fe60c2EDDa08314416': {
            from: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x1E6cF0D433de4FE882A437ABC654F58E1e78548c': {
            from: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        // bor-usd
        '0xf8D0EaFd81104002234819ABe752bCa0d41b097F': {
            from: '0x3c9d6c1C73b31c837832c72E04D3152f051fc1A9',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0xdeb288F737066589598e9214E782fa5A8eD689e8': {
            from: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 8,
            toDecimals: 18
        },
        '0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c': {
            from: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 8,
            toDecimals: 8
        },
        '0x614715d2Af89E6EC99A233818275142cE88d1Cfd': {
            from: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x8f7C7181Ed1a2BA41cfC3f5d064eF91b67daef66': {
            from: '0x56d811088235F11C8920698a204A5010a788f4b3',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x75FbD83b4bd51dEe765b2a01e8D3aa1B020F9d33': {
            from: '0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 4,
            toDecimals: 18
        },
        '0x1B39Ee86Ec5979ba5C322b826B3ECb8C79991699': {
            from: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xdbd020CAeF83eFd542f4De03e3cF0C28A4428bd5': {
            from: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x7B6230EF79D5E97C11049ab362c0b685faCBA0C2': {
            from: '0x4688a8b1F292FDaB17E9a90c8Bc379dC1DBd8713',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x0ad50393F11FfAc4dd0fe5F1056448ecb75226Cf': {
            from: '0x4688a8b1F292FDaB17E9a90c8Bc379dC1DBd8713',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x82597CFE6af8baad7c0d441AA82cbC3b51759607': {
            from: '0x2ba592F78dB6436527729929AAf6c908497cB200',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xcA696a9Eb93b81ADFE6435759A29aB4cf2991A96': {
            from: '0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 8,
            toDecimals: 18
        },
        '0x8a12Be339B0cD1829b91Adc01977caa5E9ac121e': {
            from: '0xD533a949740bb3306d119CC777fa900bA034cd52',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xCd627aA160A6fA45Eb793D19Ef54f5062F20f33f': {
            from: '0xD533a949740bb3306d119CC777fa900bA034cd52',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x773616E4d11A78F511299002da57A0a94577F1f4': {
            from: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9': {
            from: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x029849bbc0b1d93b85a8b6190e979fd38F5760E2': {
            from: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xD2A593BF7594aCE1faD597adb697b5645d5edDB2': {
            from: '0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x24D9aB51950F3d62E9144fdC2f3135DAA6Ce8D1B': {
            from: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419': {
            from: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0xbf86e7B2565eAc3bFD80634176F31bd186566b06': {
            from: '0xf8C3527CC04340b208C854E985240c02F7B7793f',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x2DE7E4a9488488e0058B95854CC2f7955B35dC9b': {
            from: '0x4E15361FD6b4BB609Fa63C81A2be19d873717870',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xF0985f7E2CaBFf22CecC5a71282a89582c382EFE': {
            from: '0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x6Ebc52C8C1089be9eB3945C4350B68B8E4C2233f': {
            from: '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x17D054eCac33D91F7340645341eFB5DE9009F1C1': {
            from: '0xc944E90C64B2c07662A292be6244BDf05Cda44a7',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xAf5E8D9Cd9fC85725A83BF23C52f1C39A71588a6': {
            from: '0x584bC13c7D411c00c01A62e8019472dE68768430',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xBFC189aC214E6A4a35EBC281ad15669619b75534': {
            from: '0x584bC13c7D411c00c01A62e8019472dE68768430',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        // husd-eth
        '0x1B61BAD1495161bCb6C03DDB0E41622c0270bB1A': {
            from: '0xdF574c24545E5FfEcb9a659c229253D4111d87e1',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 8,
            toDecimals: 18
        },
        '0xaE2EbE3c4D20cE13cE47cbb49b6d7ee631Cd816e': {
            from: '0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x656c0544eF4C98A6a98491833A89204Abb045d6b': {
            from: '0xdd974D5C2e2928deA5F71b9825b8b646686BD200',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xf8fF43E991A81e6eC886a3D281A2C6cC19aE70Fc': {
            from: '0xdd974D5C2e2928deA5F71b9825b8b646686BD200',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0xe7015CCb7E5F788B8c1010FC22343473EaaC3741': {
            from: '0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xDC530D9457755926550b59e8ECcdaE7624181557': {
            from: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c': {
            from: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x160AC928A16C93eD4895C2De6f81ECcE9a7eB7b4': {
            from: '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xFd33ec6ABAa1Bdc3D9C6C85f1D6299e5a1a5511F': {
            from: '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x82A44D92D6c329826dc557c5E1Be6ebeC5D5FeB9': {
            from: '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x7bAC85A8a13A4BcD8abb3eB7d6b4d632c5a57676': {
            from: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x24551a8Fb2A7211A25a17B1481f043A8a8adC7f2': {
            from: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xDaeA8386611A157B08829ED4997A8A62B557014C': {
            from: '0xec67005c4E498Ec7f55E092bd1d35cbC47C91892',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x98334b85De2A8b998Ba844c5521e73D68AD69C00': {
            from: '0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xc751E86208F0F8aF2d5CD0e29716cA7AD98B5eF5': {
            from: '0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x9cB2A01A7E64992d32A34db7cEea4c919C391f6A': {
            from: '0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x9b0FC4bb9981e5333689d69BdBF66351B9861E62': {
            from: '0x967da4048cD07aB37855c090aAF366e4ce1b9F48',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x2c881B6f3f6B5ff6C975813F87A4dad0b241C15b': {
            from: '0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x22134617Ae0f6CA8D89451e5Ae091c94f7D743DC': {
            from: '0x75231F58b43240C9718Dd58B4967c5114342a86c',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x57C9aB3e56EE4a83752c181f241120a3DBba06a1': {
            from: '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xbA9B2a360eb8aBdb677d6d7f27E12De11AA052ef': {
            from: '0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 8,
            toDecimals: 18
        },
        '0xd75AAaE4AF0c398ca13e2667Be57AF2ccA8B5de6': {
            from: '0x4575f41308EC1483f3d399aa9a2826d74Da13Deb',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x3a08ebBaB125224b7b6474384Ee39fBb247D2200': {
            from: '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x9B97304EA12EFed0FAd976FBeCAad46016bf269e': {
            from: '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x3b41D5571468904D4e53b6a8d93A6BaC43f02dC9': {
            from: '0xbC396689893D065F41bc2C6EcbeE5e0085233447',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x4ad7B025127e89263242aB68F0f9c4E5C033B489': {
            from: '0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x2a784368b1D492f458Bf919389F42c18315765F5': {
            from: '0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xEa0b3DCa635f4a4E77D9654C5c18836EE771566e': {
            from: '0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6',
            to: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x3147D7203354Dc06D9fd350c7a2437bcA92387a4': {
            from: '0x408e41876cCCDC0F92210600ef50372656052a38',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xD4CE430C3b67b3E2F7026D86E7128588629e2455': {
            from: '0x221657776846890989a759BA2973e427DfF5C9bB',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        // rgt-eth
        '0xc16935B445F4BDC172e408433c8f7101bbBbE368': {
            from: '0xD291E7a03283640FDc51b121aC401383A46cC623',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x4cba1e1fdc738D0fe8DB3ee07728E2Bc4DA676c6': {
            from: '0x607F4C5BB672230e8672085532f7e901544a7375',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 9,
            toDecimals: 18
        },
        '0x875D60C44cfbC38BaA4Eb2dDB76A767dEB91b97e': {
            from: '0x3155BA85D5F96b2d030a4966AF206230e46849cb',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x48731cF7e84dc94C5f84577882c14Be11a5B7456': {
            from: '0x3155BA85D5F96b2d030a4966AF206230e46849cb',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        // sand-usd
        '0x35E3f7E558C04cE7eEE1629258EcbbA03B36Ec56': {
            from: '0x3845badAde8e6dFF049820680d1F14bD3903a5d0',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x79291A9d692Df95334B1a0B3B4AE6bC606782f8c': {
            from: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x050c048c9a0CD0e76f166E2539F87ef2acCEC58f': {
            from: '0x476c5E26a75bd202a9683ffD34359C0CC15be0fF',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 6,
            toDecimals: 18
        },
        '0x8e0b7e6062272B5eF4524250bFFF8e5Bd3497757': {
            from: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xe572CeF69f43c2E488b33924AF04BDacE19079cf': {
            from: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xAE51d1f913eDB0f80562F270017806f3e9566029': {
            from: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xFb0CfD6c19e25DB4a08D8a204a387cEa48Cc138f': {
            from: '0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x3d44925a8E9F9DFd90390E58e92Ec16c996A331b': {
            from: '0x05D3606d5c81EB9b7B18530995eC9B29da05FaBa',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x26929b85fE284EeAB939831002e1928183a10fb1': {
            from: '0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 8,
            toDecimals: 8
        },
        '0xB09fC5fD3f11Cf9eb5E1C5Dba43114e3C9f477b5': {
            from: '0xc12eCeE46ed65D970EE5C899FCC7AE133AfF9b03',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x3886BA987236181D98F2401c507Fb8BeA7871dF2': {
            from: '0x0000000000085d4780B73119b644AE5ecd22b376',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xf817B69EA583CAFF291E287CaE00Ea329d22765C': {
            from: '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xD6aA3D25116d8dA79Ea0246c4826EB951872e02e': {
            from: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x553303d460EE0afB37EdFf9bE42922D8FF63220e': {
            from: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0x986b5E1e1755e3C2440e960477f25201B0a8bbD4': {
            from: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 6,
            toDecimals: 18
        },
        '0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6': {
            from: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 6,
            toDecimals: 8
        },
        '0xfAC81Ea9Dd29D8E9b212acd6edBEb6dE38Cb43Af': {
            from: '0x1c48f86ae57291F7686349F12601910BD8D470bb',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0xEe9F2375b4bdF6387aa8265dD4FB8F16512A1d46': {
            from: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 6,
            toDecimals: 18
        },
        '0x3E7d1eAB13ad0104d2750B8863b489D65364e32D': {
            from: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 6,
            toDecimals: 8
        },
        '0xa20623070413d42a5C01Db2c8111640DD7A5A03a': {
            from: '0xa47c8bf37f92aBed4A126BDA807A7b7498661acD',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x9a79fdCd0E326dF6Fa34EA13c05d3106610798E9': {
            from: '0x1cF4592ebfFd730c7dc92c1bdFFDfc3B9EfCf29a',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0xe5Dc0A609Ab8bCF15d3f35cFaa1Ff40f521173Ea': {
            from: '0x0d438F3b5175Bebc262bF23753C1E53d03432bDE',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xcEBD2026d3C99F2a7CE028acf372C154aB4638a9': {
            from: '0xBd356a39BFf2cAda8E9248532DD879147221Cf76',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x7c5d4F8345e66f68099581Db340cd65B078C41f4': {
            from: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0xA027702dbb89fbd58938e4324ac03B58d812b0E1': {
            from: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        '0xaaB2f6b45B28E962B3aCd1ee4fC88aEdDf557756': {
            from: '0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x2Da4983a622a8498bb1a21FaE9D8F6C664939962': {
            from: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        '0x2885d15b8Af22648b98B122b22FDF4D2a56c6023': {
            from: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        // btm-usd
        '0x9fCCF42D21AB278e205e7Bb310D8979F8f4B5751': {
            from: '0xcB97e65F07DA24D46BcDD078EBebd7C6E6E3d750',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 8,
            toDecimals: 8
        },
        // bat-usd
        '0x9441D7556e7820B5ca42082cfa99487D56AcA958': {
            from: '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        // rep-usd
        '0xF9FCC6E1186Acf6529B1c1949453f51B4B6eEE67': {
            from: '0x221657776846890989a759BA2973e427DfF5C9bB',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        // ramp-usd
        '0x4EA6Ec4C1691C62623122B213572b2be5A618C0d': {
            from: '0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        // ht-usd
        '0xE1329B3f6513912CAf589659777b66011AEE5880': {
            from: '0x6f259637dcD74C767781E37Bc6133cd6A68aa161',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        // sfi-eth
        '0xeA286b2584F79Cd4D322Fe107d9683971c890596': {
            from: '0xb753428af26E81097e7fD17f40c88aaA3E04902c',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        // lon-eth
        '0x13A8F2cC27ccC2761ca1b21d2F3E762445f201CE': {
            from: '0x0000000000095413afc295d19edeb1ad7b71c952',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        // snx-usd
        '0xDC3EA94CD0AC27d9A86C180091e7f78C683d3699': {
            from: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 18,
            toDecimals: 8
        },
        // dnt-eth
        '0x1F9eB026e549a5f47A6aa834689053117239334A': {
            from: '0x0abdace70d3790235af448c88547603b945604ea',
            to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
            fromDecimals: 18,
            toDecimals: 18
        },
        // renZEC-usd
        '0x0f59666EDE214281e956cb3b2D0d69415AfF4A01': {
            from: '0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2',
            to: '0x0000000000000000000000000000000000000001',
            decimals: 8,
            fromDecimals: 8,
            toDecimals: 8
        }
    },
}
