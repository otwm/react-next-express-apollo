const userResolvers = {
  Query: {
    user: async (_, { accountId }, { dataSources }) => {
      return await dataSources.userAPI.findUserByAccountId(accountId)
    },
    users: async (_, { name }, { dataSources }) => {
      return await dataSources.userAPI.findUsersByName(name)
    }
  },
  Mutation: {
    login: async (_, { accountId, pass }, { dataSources }) => {
      return await dataSources.userAPI.login({ accountId, pass })
    },
    addUser: async (_, { accountId }, { dataSources }) => {
      return await dataSources.userAPI.update(accountId)
    }
  },
}

export default userResolvers
