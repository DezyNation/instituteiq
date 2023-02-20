import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import LeftSide from "@/Components/Layout Components/Misc/LeftSide";
import { HStack } from "@chakra-ui/react";
import React from "react";
import EMRightSide from "./EMRightSide";

const Index = () => {
  return (
    <MainPage page={"curriculum-progress"}>
      <HStack alignItems={"flex-start"}>
        <LeftSide />
        <EMRightSide />
      </HStack>
    </MainPage>
  );
};

export default Index;
