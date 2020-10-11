const userResolvers = {
  Query: {
    user: async (_, { id }, { dataSources }) => {
      console.log('tttttere')
      return await dataSources.userAPI.findUserById(id)
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
