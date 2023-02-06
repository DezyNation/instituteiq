import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import MainPage from "../../Layout Components/MainPage/MainPage";
import Assessment from "../Misc/Assessment";
import AssessmentTotal from "../Misc/AssessmentTotal";
import Carousel from "../Misc/Carousel";

const Performance = () => {
  const carouselButtons = ["Assignment-1","Assignment-2","Assignment-3","SA-1","SA-2","SA-3","SA-4","SA-5"];

  return (
    <MainPage heading="Perfromance">
      <Box w="100%" h="max-content">
        <Carousel carouselButtons={carouselButtons} type="button"/>
        <Flex
          justifyContent="space-between"
          w="90%"
          bg="#fff"
          ml="40px"
          mt="30px"
          boxShadow="2.12563px 6.37688px 4.25125px rgba(0, 0, 0, 0.25)"
          px="21px"
          py="7px"
          borderRadius="12.7538px"
        >
          <Heading fontWeight="600" fontSize={"large"}>
            Sl. NO.
          </Heading>
          <Heading fontWeight="600" fontSize={"large"}>
            Subject
          </Heading>
          <Heading fontWeight="600" fontSize={"large"}>
            Date
          </Heading>
          <Heading fontWeight="600" fontSize={"large"}>
            Teacher
          </Heading>
          <Heading fontWeight="600" fontSize={"large"}>
            Percentage
          </Heading>
          <Heading fontWeight="600" fontSize={"large"}>
            Marks
          </Heading>
          <Heading fontWeight="600" fontSize={"large"}>
            Grades
          </Heading>
        </Flex>
        <Assessment
          color="#1C80DD"
          slno="1"
          title="English"
          date="27/2/22"
          teacher="Teacher"
          percentage="49"
          marks="532/625"
          grades="A+"
        />
        <Assessment
          color="#F79210"
          slno="2"
          title="English"
          date="27/2/22"
          teacher="Teacher"
          percentage="80"
          marks="532/625"
          grades="A"
        />
        <Assessment
          color="#37D334"
          slno="3"
          title="Hindi"
          date="2/4/22"
          teacher="Teacher"
          percentage="70"
          marks="472/625"
          grades="B"
        />
        <Assessment
          color="#1C80DD"
          slno="4"
          title="Science"
          date="2/4/22"
          teacher="Teacher"
          percentage="69"
          marks="472/625"
          grades="B"
        />
        <AssessmentTotal
          color="#1C80DD"
          percentage="69"
          marks="472/625"
          grades="B"
        />
      </Box>
    </MainPage>
  );
};

export default Performance;
