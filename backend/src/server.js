import { ApolloServer } from 'apollo-server-express'
import express from 'express'

function startServer({ typeDefs, resolvers }) {
    const server = new ApolloServer({ typeDefs, resolvers })

    const app = express()
    server.applyMiddleware({ app })

    //app.get('/', (_, res) => res.redirect('/graphql'))
    
    const port = 4000

    app.listen({ port }, () => {
        console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
    })
}

export default startServer