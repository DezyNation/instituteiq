import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../../Layout Components/Header/Header";
import MainPage from "../../Layout Components/MainPage/MainPage";
import Assessment from "../Misc/Assessment";
import AssessmentTotal from "../Misc/AssessmentTotal";
import Carousel from "../Misc/Carousel";
import Cards from "./Cards";
import HeaderChart from "./HeaderChart";
import IndexTimeTable from "./IndexTimeTable";
import LatestTasks from "./LatestTasks";

const Index = () => {
  return (
    <MainPage heading="Performance">
      <Flex gap="40px">
        <Cards heading="Performance" value="56%" />
        <Cards heading="Attendance" value="102" />
        <Cards heading="Pending Assignment" value="98" />
        <Cards heading="Absent" value="4" />
      </Flex>
      <Flex gap="50px" mt="50px" justifyContent="space-evenly">
        <HeaderChart />
        <HeaderChart />
      </Flex>
      <Flex gap="50px" mt="50px" justifyContent="space-evenly">
        <IndexTimeTable />
        <LatestTasks />
      </Flex>
    </MainPage>
  );
};

export default Index;
