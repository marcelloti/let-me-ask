import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider
} from "fastify-type-provider-zod";
import { env } from "./env.ts";
import { createQuestionRoute } from "./http/routes/create-question.ts";
import { createRoomsRoute } from './http/routes/create-rooms.ts';
import { getRoomsRoute } from "./http/routes/get-rooms.ts";
import { getRoomsQuestionsRoute } from "./http/routes/get-rooms-questions.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: true,
  credentials: true
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
  return 'OK';
})

app.register(getRoomsRoute)
app.register(createRoomsRoute);
app.register(getRoomsQuestionsRoute)
app.register(createQuestionRoute)

app.listen({
  port: env.PORT
});