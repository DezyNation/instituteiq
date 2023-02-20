import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import LeftSide from "@/Components/Layout Components/Misc/LeftSide";
import { HStack } from "@chakra-ui/react";
import React from "react";
import EMRightSide from "./EMRightSide";

const Index = () => {
  return (
    <MainPage page={"exam-management"}>
      <HStack alignItems={"flex-start"}>
        <LeftSide heading="School Overview"/>
        <EMRightSide />
      </HStack>
    </MainPage>
  );
};

export default Index;
