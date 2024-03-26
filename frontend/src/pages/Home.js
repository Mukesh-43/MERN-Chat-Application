import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Signup from "../components/Authentication/Signup";
import Login from "../components/Authentication/Login";

const Home = () => {
  return (
    <Container className="max-w-1" contentCenter>
      <Box className="flex justify-center p-3 bg-white w-full mt-20 mb-5 rounded-lg border-2">
        <Text className="text-2xl font-sans">MERN Chat App</Text>
      </Box>
      <Box className="bg-white w-full p-4 rounded-lg border-1">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList className="mb-2">
            <Tab className="w-1/2">Login</Tab>
            <Tab className="w-1/2">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
