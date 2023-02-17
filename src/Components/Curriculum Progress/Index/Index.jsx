import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import { Flex } from "@chakra-ui/react";
import React from "react";
import LeftSide from "../LeftSide";

const Index = () => {
  return (
    <MainPage page={"curriculum-progress"}>
        <LeftSide />
    </MainPage>
  );
};

export default Index;
