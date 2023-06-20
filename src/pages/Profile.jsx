import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { TabList, TabPanels, Tabs ,Tab, TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
            <Tab _selected={{color: 'white' ,bg: "purple.400"}}>Account Info</Tab>
            <Tab _selected={{color: 'white' ,bg: "purple.400"}}>Task History</Tab>
      </TabList>
      <TabPanels>
             <TabPanel>
              <List>
                <ListItem>
                  <ListIcon as={EmailIcon}/>
                        Email: mario@netninja.dev
                </ListItem>
                <ListItem>
                  <ListIcon as={ChatIcon}/>
                        Lorem ipsum dolor sit amet.
                </ListItem>
                <ListItem>
                  <ListIcon as={StarIcon}/>
                        Lorem ipsum dolor sit amet.
                </ListItem>
              </List>
             </TabPanel>
             <TabPanel>
              <List>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="teal.400"/>
                        Email: mario@netninja.dev
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="teal.400"/>
                        Lorem ipsum dolor sit amet.
                </ListItem>
                <ListItem>
                  <ListIcon as={WarningIcon} color="red.400"/>
                        Lorem ipsum dolor sit amet.
                </ListItem>
              </List>
             </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
