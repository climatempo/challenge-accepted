import React, { useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../functions/api'
import theme from '../theme'
import Home from './Home'

function App() {
    const apolloClient = useApollo()

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ApolloProvider client={apolloClient}>
                <Home />
            </ApolloProvider>
        </ThemeProvider>
    )
}

export default App
