import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Container, Heading ,Text, Box, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Flex, HStack ,Button, Divider, Avatar} from "@chakra-ui/react";
import { color } from "framer-motion";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks =useLoaderData()


  return (
    <SimpleGrid spacing={10} minChildWidth={250} p="10px">
       {tasks && tasks.map(task => (
        <Card key={task.id} borderTop="8px" borderColor={"purple.400"} bg="white">
             <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img}/>
                <Box>
                  <Heading as="h3" size="sm">{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
             </CardHeader>
             <CardBody color="gray.500">
             <Text>{task.description}</Text>
             </CardBody>
             <Divider borderColor="gray.200"/>
             <CardFooter>
             <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon/>}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon/>}>Comment</Button>
             </HStack>
             </CardFooter>
        </Card>
       ))}
    </SimpleGrid>
  )
}

export const taskloader  = async () => {
  const res = await fetch(' http://localhost:3000/tasks')
  return res.json()
}

 {/* <Box bg="white" height="200px" border="1px solid">
          <Text color={{base : 'pink', md : 'blue' , lg : 'green'}}>Hello</Text>
        </Box>
        <Box bg="white" height="200px" border="1px solid"></Box>
        <Box bg="white" height="200px" border="1px solid"></Box>
        <Box bg="white" height="200px" border="1px solid"></Box>

        <Box bg="white" height="200px" border="1px solid"></Box>
        <Box bg="white" height="200px" border="1px solid"></Box>
        <Box bg="white" height="200px" border="1px solid"></Box>
        <Box bg="white" height="200px" border="1px solid"></Box>

        <Box bg="white" height="200px" border="1px solid"></Box>
        <Box bg="white" height="200px" border="1px solid"></Box>
        <Box bg="white" height="200px" border="1px solid"></Box>
        <Box bg="white" height="200px" border="1px solid"></Box>

        <Box bg="white" height="200px" border="1px solid"></Box>
        <Box bg="white" height="200px" border="1px solid"></Box>
        <Box bg="white" height="200px" border="1px solid"></Box>
        <Box bg="white" height="200px" border="1px solid"></Box> */}
