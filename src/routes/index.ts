import { FastifyPluginAsync } from 'fastify'
import authRoute from './api/index.js'

const routes: FastifyPluginAsync = async (fastify) => {
  fastify.register(authRoute, { prefix: '/api' })
}

export default routes


