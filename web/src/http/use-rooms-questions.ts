import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import type { GetRoomQuestionsResponse } from "./types/get-room-questions-response"

export function useRoomQuestions(roomId: string){
  console.log("useRoom roomId", roomId)
  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const response = await axios.get<GetRoomQuestionsResponse>(
        `http://localhost:3333/rooms/${roomId}/questions`
      )

      const result: GetRoomQuestionsResponse = await response.data
  
      return result
    }
  })
}
