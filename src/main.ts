import Fastify from 'fastify'
import routes from './routes/index.js'
import fastifySwagger from '@fastify/swagger'
import { swaggerConfig } from './config/swagger.js'

const server = Fastify({
  logger: true,
})

getSwagger()

server.register(routes)

server.listen({ port: 4001 })

async function getSwagger() {
  await server.register(fastifySwagger, swaggerConfig)
}
