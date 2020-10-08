import { gql } from 'apollo-server-express'

const userDefs = gql`
  type User {
    id: ID!
    accountId: String!
    name: String!
    pass: String!
    email: String!
    bio: String
    createAt: DateTime!
    updateAt: DateTime
  }
  
  extend type Query {
    user(accountId: String!): User
    users(
      name: String!
    ): [User]
  }
  
  extend type Mutation {
    login(accountId: String!, pass: String!): String
    addUser(user: String!): addUserResponse
  }
  
  type addUserResponse {
    success: Boolean!
    message: String
  }
`

export default userDefs
