import { DataSource } from 'apollo-datasource'
import consola from 'consola'

const testUser = {
  id: 1,
  accountId: 'test',
  name: 'tester',
  pass: '1234',
  email: 'test@gmail.com',
  bio: 'hello',
  createAt: new Date(),
  updateAt: null,
}

export default class UserAPI extends DataSource {
  constructor() {
    super()
  }

  // @ts-ignore
  async findUserByAccountId (accountId) {
    return await testUser
  }

  // @ts-ignore
  async findUsersByName (name) {
    return await testUser
  }

  // @ts-ignore
  async login ({ accountId, pass }) {
    return 'ok'
  }

  async update () {
    consola.log('done')
  }
}
