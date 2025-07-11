
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';
import { useCreateRoom } from '@/http/use-create-room';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const createRoomSchema = z.object({
  name: z.string().min(3, { message: "Include at least 3 characters"}),
  description: z.string()
})

type CreateRoomFormData = z.infer<typeof createRoomSchema>

export function CreateRoomForm(){
  const { mutateAsync: createRoom } = useCreateRoom()

  async function handleCreateRoom({ name, description }: CreateRoomFormData){
    await createRoom({ name, description })
    createRoomForm.reset()
  }

  const createRoomForm = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: '',
      description: ''
    }
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Room</CardTitle>
        <CardDescription>Create a new room to start asking questions and receiving AI responses.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...createRoomForm}>
          <form onSubmit={createRoomForm.handleSubmit(handleCreateRoom)} className="flex flex-col gap-4">
            <FormField 
              control={createRoomForm.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>
                      Room Name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter room name..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField 
              control={createRoomForm.control}
              name="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />

            <Button type="submit" className="w-full">Create Room</Button>
          </form>
        </Form>
      </CardContent>  
    </Card>
  )
}