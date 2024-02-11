import Fastify from 'fastify'


const server = Fastify({
  logger: true,
})

server.get('/', async (req, res) => {
  return 'pong'
})

server.listen({ port: 4001 })