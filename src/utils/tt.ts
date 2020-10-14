import { ApolloLink, HttpLink } from '@apollo/client'

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
})
export default httpLink

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
    }
  })

  return forward(operation)
})
