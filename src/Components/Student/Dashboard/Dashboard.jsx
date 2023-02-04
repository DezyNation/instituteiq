import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import LatestTasks from "../Index/LatestTasks";
import Cards from "../Misc/Cards";
import IndexTimeTable from "../Misc/IndexTimeTable";
import AttendanceStat from "./AttendanceStat";
import ToDoList from "./ToDoList";

const Dashboard = () => {
  return (
    <MainPage heading="Dashboard">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h2" fontSize="24px" fontWeight="350" lineHeight="28px" color="black">Assignment Overview</Heading>
        <Heading as="h2" fontSize="16px" fontWeight="350" lineHeight="28px" color="black">Assignment <ChevronDownIcon boxSize={5}/> </Heading>
      </Flex>
      <Flex gap="40px" mt="50px">
        <Cards heading="Received" value="56" />
        <Cards heading="Yet to Receive" value="102" />
        <Cards heading="Pending Review" value="98" />
        <Cards heading="Reviewed" value="4" />
      </Flex>
      <Flex gap="50px" mt="50px" justifyContent="space-evenly">
        <IndexTimeTable width="370px"/>
        <AttendanceStat/>
        <ToDoList />
      </Flex>
    </MainPage>
  );
};

export default Dashboard;
