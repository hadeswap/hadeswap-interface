import { ChainId } from 'hadeswap-beta-sdk'
import React from 'react'
import { Redirect, Route, RouteComponentProps, Switch, useLocation } from 'react-router-dom'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'
import AddLiquidity from './pages/AddLiquidity'
import {
    RedirectDuplicateTokenIds,
    RedirectOldAddLiquidityPathStructure,
    RedirectToAddLiquidity
} from './pages/AddLiquidity/redirects'
import Pool from './pages/Pool'
import PoolFinder from './pages/PoolFinder'
import RemoveLiquidity from './pages/RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './pages/RemoveLiquidity/redirects'
import Trade from './pages/Trade'
import Swap from './pages/Swap'
import {
    OpenClaimAddressModalAndRedirectToSwap,
    RedirectHashRoutes,
    RedirectPathToSwapOnly,
    RedirectToSwap
} from './pages/Swap/redirects'
import Tools from './pages/Tools'
import MasterChefV1 from './pages/Yield/masterchefv1'
import Transactions from './pages/Transactions'
import NewSale from './pages/NewSale'
import NewToken from './pages/NewToken'
import Launcher from './pages/Launcher'

function Routes(): JSX.Element {
    const { chainId } = useActiveWeb3React()
    return (
        <Switch>
            {chainId === ChainId.MAINNET && (
                <Route exact strict path="/claim" component={OpenClaimAddressModalAndRedirectToSwap} />
            )}

            {/* Pages */}
            {/*<Route exact strict path="/tradingview" component={Trade} />*/}
            <Route exact strict path="/trade" component={Swap} />
            <Route exact strict path="/swap" component={Swap} />
            <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
            <Route exact strict path="/send" component={RedirectPathToSwapOnly} />

            {chainId === ChainId.MAINNET && <Route exact strict path="/yield" component={MasterChefV1} />}
            {chainId === ChainId.MAINNET && <Route exact strict path='/find' component={PoolFinder} />}
            {chainId === ChainId.MAINNET && <Route exact strict path='/pool' component={Pool} />}
            {chainId === ChainId.MAINNET && <Route exact strict path='/transactions' component={Transactions} />}
            {chainId === ChainId.MAINNET && <Route exact strict path='/create' component={RedirectToAddLiquidity} />}
            {chainId === ChainId.MAINNET && <Route exact path='/add' component={AddLiquidity} />}
            {chainId === ChainId.MAINNET && <Route exact path='/add/:currencyIdA' component={RedirectOldAddLiquidityPathStructure} />}
            {chainId === ChainId.MAINNET && <Route exact path='/add/:currencyIdA/:currencyIdB' component={RedirectDuplicateTokenIds} />}
            {chainId === ChainId.MAINNET && <Route exact path='/create' component={AddLiquidity} />}
            {chainId === ChainId.MAINNET && <Route exact path='/create/:currencyIdA' component={RedirectOldAddLiquidityPathStructure} />}
            {chainId === ChainId.MAINNET && <Route exact path='/create/:currencyIdA/:currencyIdB' component={RedirectDuplicateTokenIds} />}
            {chainId === ChainId.MAINNET && <Route exact strict path='/remove/:tokens' component={RedirectOldRemoveLiquidityPathStructure} />}
            {chainId === ChainId.MAINNET && <Route exact strict path='/remove/:currencyIdA/:currencyIdB' component={RemoveLiquidity} />}

            {/* Redirects for app routes */}
            <Route
                exact
                strict
                path="/token/:address"
                render={({
                    match: {
                        params: { address }
                    }
                }) => <Redirect to={`/swap/${address}`} />}
            />
            <Route
                exact
                strict
                path="/pair/:address"
                render={({
                    match: {
                        params: { address }
                    }
                }) => <Redirect to={`/pool`} />}
            />

            <Route exact strict path="/newsale" component={NewSale}/>
            <Route exact strict path="/newtoken" component={NewToken}/>
            <Route exact strict path="/launcher" component={Launcher}/>
            

            {/* Redirects for Legacy Hash Router paths */}
            <Route exact strict path="/" component={RedirectHashRoutes} />

            {/* Catch all */}
            <Route component={RedirectPathToSwapOnly} />
        </Switch>
    )
}

export default Routes

// A wrapper for <Route> that redirects to the Connect Wallet
// screen if you're not yet authenticated.
export const PublicRoute = ({ component: Component, children, ...rest }: any) => {
    const { account } = useActiveWeb3React()
    const location = useLocation<any>()
    return (
        <>
            <Route
                {...rest}
                render={(props: RouteComponentProps) =>
                    account ? (
                        <Redirect
                            to={{
                                pathname: location.state ? location.state.from.pathname : '/'
                            }}
                        />
                    ) : Component ? (
                        <Component {...props} />
                    ) : (
                        children
                    )
                }
            />
        </>
    )
}

// A wrapper for <Route> that redirects to the Connect Wallet
// screen if you're not yet authenticated.
export const WalletRoute = ({ component: Component, children, ...rest }: any) => {
    const { account } = useActiveWeb3React()
    return (
        <>
            <Route
                {...rest}
                render={({ location, props, match }: any) => {
                    return account ? (
                        Component ? (
                            <Component {...props} {...rest} match={match} />
                        ) : (
                            children
                        )
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/connect',
                                state: { from: location }
                            }}
                        />
                    )
                }}
            />
        </>
    )
}
