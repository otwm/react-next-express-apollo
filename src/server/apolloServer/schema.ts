import * as path from 'path'
import { makeExecutableSchema } from 'graphql-tools'
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas'

const resolversArray = fileLoader(path.join(__dirname, './resolvers/'), { recursive: true, extensions: ['.ts'] })
const typesArray = fileLoader(path.join(__dirname, './types/'), { recursive: true, extensions: ['.gql'] })
const resolvers = mergeResolvers(resolversArray)
export const typeDefs = mergeTypes(typesArray, {all: true})
const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
