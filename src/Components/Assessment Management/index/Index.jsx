import CPRightSide from "@/Components/Curriculum Progress/Index/CPRightSide";
import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import LeftSide from "@/Components/Layout Components/Misc/LeftSide";
import { HStack } from "@chakra-ui/react";
import React from "react";
import ASSMRightSide from "./ASSMRightSide";

const Index = () => {
  return (
    <MainPage page={"assessment-management"}>
      <HStack alignItems={"flex-start"}>
        <LeftSide page="assessment-management" heading="Your Class : "/>
        <CPRightSide />
      </HStack>
    </MainPage>
  );
};

export default Index;
