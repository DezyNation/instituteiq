import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import { Flex, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import LeftSide from "../../Layout Components/Misc/LeftSide";
import CPRightSide from "./CPRightSide";

const Index = () => {
  return (
    <MainPage pageWidth={"full"}>
      <HStack alignItems={"flex-start"}>
        <LeftSide heading="School Overview" page="curriculum-progress"/>
        <CPRightSide />
      </HStack>
    </MainPage>
  );
};

export default Index;
