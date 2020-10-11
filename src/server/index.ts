import express from 'express'
import consola from 'consola'
import nextServer from './nextServer'
import apolloServer from './apolloServer'
import { config } from 'dotenv'

config()

async function main () {
  consola.log(process.env.APOLLO_KEY)
  const app = express()
  apolloServer.applyMiddleware({ app })
  await nextServer.prepare()
  const handle = nextServer.getRequestHandler()
  app.get('*', (req, res) => handle(req, res))
  app.listen(3000, () => {
    consola.log('ok')
  })
}

main().then()
