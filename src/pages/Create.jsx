import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel> Task Name: </FormLabel>
          <Input type="text" name=" title"></Input>
          <FormHelperText>Enter a Descriptive Task</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Task description:</FormLabel>
          <Textarea 
          placeholder="Enter a detailed description for the task...."
          name="description"
          ></Textarea>
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox
             name="ispriority"
             size="lg"
             colorScheme="purple"
          />
          <FormLabel mb="0" ml="10px">Make this a priority task.</FormLabel>
        </FormControl>
        <Button type="submit" colorScheme="purple">Submit</Button>
      </Form>
    </Box>
  )
}

export const createAction = async ({request}) => {
  const data =await request.formData()

  const task ={
    title: data.get('title'),
    decription:data.get("description"), 
    ispriority:data.get("ispriority") === ''
  }

  console.log(task)
  return redirect("/")
}