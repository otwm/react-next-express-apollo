import { ApolloServer } from 'apollo-server-express'
import schema from './schema'
import dataSources from './datasources'

const index = new ApolloServer({ schema, dataSources })

export default index
