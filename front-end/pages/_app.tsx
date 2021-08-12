import "@fontsource/inter/900.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/300.css"
import "@fontsource/inter/200.css"

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme/theme'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ ChakraProvider>
    </ ApolloProvider>
  )

}
export default MyApp
 