import { DataSource } from 'apollo-datasource'
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
  constructor() {
    super()
  }

  async findUserByAccountId (accountId) {
    return users.find(user => {
      return user.accountId === accountId
    })
  }

  async findUsersByName (name) {
    return users.filter(user => user.name?.includes(name))
  }

  // @ts-ignore
  async login ({ accountId, pass }) {
    return 'ok'
  }

  async update () {
    consola.log('done')
  }
}
