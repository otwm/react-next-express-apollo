import { ApolloServer } from 'apollo-server-express'
import schema from './schema'
import dataSources from './datasources'
import { config } from 'dotenv'

config()

const key = process.env.APOLLO_KEY
const graphVariant = process.env.APOLLO_GRAPH_VARIANT
const apollo = { key, graphVariant }
const context = async ({ req }) => {
  const user= await dataSources().userAPI.findUserByToken(req.cookies?.userToken)
  return { user }
}
const index = new ApolloServer({ schema, dataSources, apollo, context })

export default index
