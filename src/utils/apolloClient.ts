import { ApolloClient, InMemoryCache } from '@apollo/client'
import httpLink from './tt'

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  credentials: 'same-origin'
});

export default apolloClient
