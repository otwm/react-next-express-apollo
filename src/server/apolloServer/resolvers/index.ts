import launchResolvers from './launchResolvers'
import userResolvers from './userResolvers'
import { mergeDeepRight } from 'ramda'

const resolvers = mergeDeepRight(userResolvers, launchResolvers)

export default resolvers
