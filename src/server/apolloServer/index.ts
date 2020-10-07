import { ApolloServer } from 'apollo-server-express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const index = new ApolloServer({ typeDefs, resolvers })

export default index
