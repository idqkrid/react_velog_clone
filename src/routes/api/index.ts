import { FastifyPluginAsync } from 'fastify'

const api: FastifyPluginAsync = async (fastify) => {
  fastify.post('/login', async () => {
    return null
  })

  fastify.post('/register', async () => {
    return null
  })
}

export default api
