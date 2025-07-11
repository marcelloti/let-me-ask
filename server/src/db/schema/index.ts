import { audioChunks } from "./audio-chunks.ts";
import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

// Barrel File = Um arquivo que reexporta todos os arquivos que tem ali dentro
export const schema = {
  rooms,
  questions,
  audioChunks
}