import express from 'express'
import consola from 'consola'
import nextServer from './nextServer'
import apolloServer from './apolloServer'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

async function main () {
  const app = express()
  app.use(cookieParser())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended:  true }))
  apolloServer.applyMiddleware({ app })
  await nextServer.prepare()
  const handle = nextServer.getRequestHandler()
  app.get('*', (req, res) => handle(req, res))
  app.listen(3000, () => {
    consola.log('ok')
  })
}

main().then()
