import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import { Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Index = () => {
  return (
    <MainPage page={"curriculum-progress"}>
      <HStack alignItems={"flex-start"}>
        <LeftSide />
        <RightSide />
      </HStack>
    </MainPage>
  );
};

export default Index;
