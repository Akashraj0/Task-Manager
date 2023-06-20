import { UnlockIcon } from "@chakra-ui/icons";
import {Flex, Box ,Heading , Text, Button, Spacer , HStack, useToast, Avatar, AvatarBadge} from "@chakra-ui/react";
export default function Navbar(){
    const toast = useToast()

    const showToast =() => {
        toast({
            title: 'Logged Out',
            description : 'successfully logged out',
            duration: 5000,
            isClosable: true,
            status : 'success',
            position: 'top',
            icon: <UnlockIcon/>
        })
    }
    return (
        <Flex as="nav" p="10px" mb="40px" alignItems="center">
            <Heading as="h1">Akash Task</Heading>
            <Spacer/>
            <HStack spacing="20px">
            <Avatar name="Mario" src="/img/mario.png" bg='purple'>
                <AvatarBadge width="1.3em" bg="teal.500">
                   <Text fontSize="xs" color="white">3</Text>
                </AvatarBadge>
            </Avatar>
            <Text>akashraj@gmail.com</Text>
            <Button colorScheme="purple" onClick={showToast}>Logout</Button>
            </HStack>  
        </Flex>
    )
}