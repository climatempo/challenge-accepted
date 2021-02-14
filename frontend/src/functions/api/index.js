import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink, concat } from '@apollo/client'

let apolloClient

function createApolloClient() {
    return new ApolloClient({
        uri: "http://localhost:4000/graphql",
        cache: new InMemoryCache()
    })
}

export function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient()

    if (initialState) {
        const existingCache = _apolloClient.extract()

        _apolloClient.cache.restore({ ...existingCache, ...initialState })
    }

    if (typeof window === "undefined") return _apolloClient

    if (!apolloClient) apolloClient = _apolloClient
    return _apolloClient
}

export function useApollo(initialState) {
    const store = useMemo(() => initializeApollo(initialState), [initialState])
    return store
}