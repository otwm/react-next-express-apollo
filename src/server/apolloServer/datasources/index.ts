import LaunchAPI from './LaunchAPI'
import UserAPI from './userAPI'

const dataSources = () => ({
  launchAPI: new LaunchAPI(),
  userAPI: new UserAPI(),
})

export default dataSources
