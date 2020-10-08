import { paginateResults } from '../utils'

const launchResolvers = {
  Query: {
    launches: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allLaunches = await dataSources.launchAPI.getAllLaunches()
      allLaunches.reverse();
      const launches = paginateResults({
        after, pageSize, results: allLaunches
      })
      return {
        launches,
        cursor: launches.length ? launches[launches.length - 1].cursor : null,
        hasMore: launches.length ? launches[launches.length - 1].cursor !== allLaunches[allLaunches.length - 1].cursor : false
      }
    },
    launch: (_, { id }, { dataSources }) => dataSources.launchAPI.getLaunchById({ launchId: id }),
  }
}

export default launchResolvers
