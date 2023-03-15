import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import LeftSide from "@/Components/Layout Components/Misc/LeftSide";
import { HStack } from "@chakra-ui/react";
import React from "react";
import MERightSide from "./MERightSide";

const Index = () => {
  return (
    <MainPage pageWidth={"full"}>
      <HStack alignItems={"flex-start"}>
        <LeftSide page="marks-entry" heading="Your Classes : " />
        <MERightSide />
      </HStack>
    </MainPage>
  );
};

export default Index;
