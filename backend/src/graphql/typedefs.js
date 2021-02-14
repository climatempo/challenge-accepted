import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import path from 'path'

const typesArray = fileLoader(path.join(__dirname, 'modules', '**', '*.gql'))
const typeDefs = mergeTypes(typesArray)

export default typeDefs