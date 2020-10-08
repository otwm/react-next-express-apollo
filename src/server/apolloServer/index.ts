import { ApolloServer } from 'apollo-server-express'
import { schema, dataSources } from './schemaAndDataSource'

const index = new ApolloServer({ schema, dataSources })

export default index
