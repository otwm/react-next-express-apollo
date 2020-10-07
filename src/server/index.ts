import express from 'express'
import consola from 'consola'
import nextServer from './nextServer'
import apolloServer from './apolloServer'

async function main () {
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
