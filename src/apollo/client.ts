import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

export const blocklytics = new ApolloClient({
    link: createHttpLink({
        uri: 'https://graph.polis.tech/subgraphs/name/blocklytics/ethereum-blocks'
    }),
    cache: new InMemoryCache()
})

export const masterchef = new ApolloClient({
    link: createHttpLink({
        uri: 'https://graph.polis.tech/subgraphs/name/hadeswap/plutus'
    }),
    cache: new InMemoryCache()
})



export const exchange = new ApolloClient({
    link: createHttpLink({
        uri: 'https://graph.polis.tech/subgraphs/name/hadeswap/exchange'
    }),
    cache: new InMemoryCache()
})


// export const healthClient = new ApolloClient({
//     link: createHttpLink({
//         uri: 'https://api.thegraph.com/index-node/graphql'
//     }),
//     cache: new InMemoryCache()
// })

export const blockClient = new ApolloClient({
    link: createHttpLink({
        uri: 'https://graph.polis.tech/subgraphs/name/blocklytics/ethereum-blocks'
    }),
    cache: new InMemoryCache()
})

