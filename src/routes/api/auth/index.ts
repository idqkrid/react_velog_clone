import { FastifyPluginAsync } from 'fastify'
import UserService from '../../../service/UserService.js'
import { loginSchema, registerSchema } from './schema.js'
import { AuthBody } from '../auth/types.js'

const authRoute: FastifyPluginAsync = async (fastify) => {
  const userService = UserService.getInstance()
  fastify.post('/login', { schema: loginSchema }, async () => {
    return userService.login()
  })

  fastify.post<{ Body: AuthBody }>(
    '/register',
    {
      schema: registerSchema,
    },
    async (fastify) => {
      return userService.register(fastify.body)
    },
  )
}
export default authRoute