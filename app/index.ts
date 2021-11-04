
import Fastify        from 'fastify'
import FastifyCookie  from 'fastify-cookie'
import fastifySession from '@fastify/session'

const app = Fastify()

app.register(FastifyCookie)
app.register(fastifySession)

;(async () => {

  await app.listen(3000, '0.0.0.0')
  console.log('👍 Server running')

})()