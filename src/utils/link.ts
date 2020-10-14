import { HttpLink } from '@apollo/client'

const link = new HttpLink({
  uri: 'http://localhost:3000/graphql',
})
export default link
