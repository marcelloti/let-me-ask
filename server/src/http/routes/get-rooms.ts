import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get('/rooms', async () => {
    try {
      console.log('Rota /rooms foi chamada!');
      
      const results = await db.select({
        id: schema.rooms.id,
        name: schema.rooms.name,
      }).from(schema.rooms).orderBy(schema.rooms.createdAt)
      
      console.log('Resultados:', results);
      
      return results;
    } catch (error) {
      console.error('Erro na rota /rooms:', error);
      throw error;
    }
  })
}