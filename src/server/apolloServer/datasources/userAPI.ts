import { DataSource, DataSourceConfig } from 'apollo-datasource'
import consola from 'consola'

const user1 = {
  id: 1,
  accountId: 'test1',
  name: 'tester1',
  pass: '1234',
  email: 'test@gmail.com',
  bio: 'hello',
  createAt: new Date(),
  updateAt: null,
}

const user2 = {
  id: 2,
  accountId: 'test2',
  name: 'tester2',
  pass: '1234',
  email: 'test@gmail.com',
  bio: 'hello',
  createAt: new Date(),
  updateAt: null,
}

const user3 = {
  id: 3,
  accountId: 'test3',
  name: 'tester3',
  pass: '1234',
  email: 'test@gmail.com',
  bio: 'hello',
  createAt: new Date(),
  updateAt: null,
}

const users = [ user1, user2, user3 ]

export default class UserAPI extends DataSource {
  context
  constructor() {
    super()
  }

  initialize(config: DataSourceConfig<any>): void | Promise<void> {
    this.context = config.context
  }

  async findUserByAccountId (accountId) {
    return users.find(user => {
      return user.accountId === accountId
    })
  }

  async findUserById (id) {
    return users.find(user => {
      return user.id === Number(id)
    })
  }
  async findUsersByName (name) {
    return users.filter(user => user.name?.includes(name))
  }

  async login ({ accountId, pass }) {
    const user = users.find(user => {
      return user.accountId === accountId && user.pass === pass
    })
    if (!user) throw new Error('login error')
    return `${user?.accountId}${user?.id}`
  }

  async update () {
    consola.log('done')
  }

  async findUserByToken(token) {
    return users.find(user => {
      return `${user.accountId}${user.pass}` === token
    })
  }
}
