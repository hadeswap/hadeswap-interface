import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

export const blocklytics = new ApolloClient({
    link: createHttpLink({
        uri: 'http://178.128.159.75:8000/subgraphs/name/blocklytics/ethereum-blocks'
    }),
    cache: new InMemoryCache()
})

export const masterchef = new ApolloClient({
    link: createHttpLink({
        uri: 'http://178.128.159.75:8000/subgraphs/name/aether-eum/plutus3'
    }),
    cache: new InMemoryCache()
})

export const minichefv2_matic = new ApolloClient({
    link: createHttpLink({
        uri: ''
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})

export const client = new ApolloClient({
    link: createHttpLink({
        uri: 'https://api.thegraph.com/subgraphs/name/jiro-ono/sushiswap-v1-exchange'
    }),
    cache: new InMemoryCache()
})

export const exchange = new ApolloClient({
    link: createHttpLink({
        uri: 'http://178.128.159.75:8000/subgraphs/name/hadeswap/exchange'
    }),
    cache: new InMemoryCache()
})

export const exchange_matic = new ApolloClient({
    link: createHttpLink({
        uri: 'https://api.thegraph.com/subgraphs/name/sushiswap/matic-exchange'
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})

export const healthClient = new ApolloClient({
    link: createHttpLink({
        uri: 'https://api.thegraph.com/index-node/graphql'
    }),
    cache: new InMemoryCache()
})

export const blockClient = new ApolloClient({
    link: createHttpLink({
        uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks'
    }),
    cache: new InMemoryCache()
})

