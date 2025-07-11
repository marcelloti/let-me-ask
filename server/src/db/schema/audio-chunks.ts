import { pgTable, text, timestamp, uuid, vector } from "drizzle-orm/pg-core";
import { rooms } from "./rooms.ts";

export const audioChunks = pgTable('audio_chuncks', {
  id: uuid().primaryKey().defaultRandom(),
  roomId: uuid().references(() => rooms.id).notNull(),
  transcription: text().notNull(),
  // 768 é a dimensão padrão dos embeddings do modelo BERT-base-uncased
  // Este número representa o tamanho do vetor que codifica o significado semântico do texto
  // Usado para busca semântica e similaridade de conteúdo
  // A busca semântica permite encontrar conteúdo similar baseado no significado, não apenas palavras-chave.
  // Ex: "Como funciona a IA?" pode encontrar "O que é inteligência artificial?" mesmo sem palavras iguais
  // As 768 dimensões capturam nuances semânticas que permitem essa comparação inteligente.
  embeddings: vector({ dimensions: 768 }).notNull(), 
  createdAt: timestamp().defaultNow().notNull(),
})