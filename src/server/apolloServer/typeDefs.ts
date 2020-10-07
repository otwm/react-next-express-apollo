import { gql } from 'apollo-server-express'

const typeDefs = gql`
  # my type
  
  type Query {
    hello: String
  }
`

export default typeDefs
