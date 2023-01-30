import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Header from "../Layout Components/Header/Header";
import TimeTableItem from "../Misc/TimeTableItem";

const ExamTimetable = () => {
  return (
    <Flex w="83%" flexDirection="column" alignItems="flex-end" bg="#f5f5f5" h="max-content" pb="50px">
      <Header />
      <Box alignSelf="flex-start" w="90%">
        <Heading
          as={"h1"}
          fontWeight="bold"
          fontSize={"xx-large"}
          ml="40px"
          mt="30px"
        >
          Exam Timetable
        </Heading>
        <TimeTableItem number={1} title="Assessment-1" date="1/10/2022 - 10/10/2022" status="Upcoming"/>
        <TimeTableItem number={2} title="Assessment-2" date="1/10/2022 - 10/10/2022" status="Upcoming"/>
        <TimeTableItem number={3} title="Assessment-3" date="1/10/2022 - 10/10/2022" status="Finish"/>
        <TimeTableItem number={4} title="Assessment-4" date="1/10/2022 - 10/10/2022" status="Finish"/>
        <TimeTableItem number={5} title="Assessment-5" date="1/10/2022 - 10/10/2022" status="Finish"/>
      </Box>
    </Flex>
  );
};

export default ExamTimetable;
