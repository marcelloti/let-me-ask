import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import type { GetRoomsResponse } from "./types/get-rooms-response"

export function useRooms(){
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await axios.get<GetRoomsResponse>('http://localhost:3333/rooms')
      const result = response.data
  
      console.log('result', result)
      return result
    }
  })
}
