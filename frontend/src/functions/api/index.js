import { useMemo } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'

let apolloClient

function createApolloClient() {
    return new ApolloClient({
        uri: `http://${window.location.hostname}:4000/graphql`,
        cache: new InMemoryCache()
    })
}

export function initializeApollo() {
    const _apolloClient = apolloClient ?? createApolloClient()

    if (typeof window === "undefined") return _apolloClient

    if (!apolloClient) apolloClient = _apolloClient
    return _apolloClient
}

export function useApollo() {
    const store = useMemo(() => initializeApollo())
    return store
}