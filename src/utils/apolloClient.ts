import { ApolloClient, InMemoryCache } from '@apollo/client'
import link from './link'

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  credentials: 'same-origin'
});

export default apolloClient
