import { GoogleGenAI } from "@google/genai";
import { env } from "../env.ts";

const gemini = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY
})

const model = 'gemini-2.5-flash'

export async function transcribeAudio(audioAsBase64: string, mimeType: string){
  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: 'Transcribe the audio to English. Be precise and natural in the transcription. Maintain proper punctuation and divide the text into paragraphs when appropriate.'
      },
      {
        inlineData: {
          mimeType,
          data: audioAsBase64,
        }
      }
    ]
  })

  if (!response.text){
    throw new Error('Could not convert audio')
  }

  return response.text;
}

export async function generateEmbeddings(text: string){
  const response = await gemini.models.embedContent({
    model: 'text-embedding-004',
    contents: [{ text }],
    config: {
      taskType: 'RETRIEVAL_DOCUMENT'
    }
  })

  if (!response.embeddings?.[0].values){
    throw new Error('Could not generate embeddings')
  }

  return response.embeddings[0].values;
}

export async function generateAnswer(question: string, transcriptions: string[]){
  const context = transcriptions.join('\n\n')

  const prompt = `
    Based on the text provided below as context, answer the question clearly and accurately in English.

    CONTEXT:
    ${context}

    QUESTION:
    ${question}

    INSTRUCTIONS:
    - Use only information contained in the provided context
    - If the answer is not found in the context, simply respond that you don't have enough information to answer
    - Be objective
    - Maintain an educational and professional tone
    - Cite relevant excerpts from the context if appropriate
    - If citing the context, use the term "class content"
  `.trim()

  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: prompt
      }
    ]
  })

  if (!response){
    throw new Error('Failed to generate response with Gemini')
  }

  return response.text;
}