import Fastify from 'fastify'
import routes from './routes/index.js'

const server = Fastify({
  logger: true,
})

server.get('/', async () => {
  return 'pong'
})

server.register(routes)

server.listen({ port: 4000 })
