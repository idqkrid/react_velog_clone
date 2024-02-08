import Fastify from 'fastify'
import routes from './routes/index.js'
import fastifySwagger from '@fastify/swagger'
import { swaggerConfig } from './config/swagger.js'
import db from './lib/db.js'

const server = Fastify({
  logger: true,
})

// db.user
//   .create({
//     data: {
//       username: 'velopert',
//       passwordHash: '2dfdsafdaf',
//     },
//   })
//   .then(console.log)

getSwagger()

server.register(routes)

server.listen({ port: 4001 })

async function getSwagger() {
  await server.register(fastifySwagger, swaggerConfig)
}
