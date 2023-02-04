import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Header from "../../Layout Components/Header/Header";
import MainPage from "../../Layout Components/MainPage/MainPage";
import TimeTableItem from "./TimeTableItem";

const ExamTimetable = () => {
  return (
    <MainPage heading="Exam Timetable">
      <TimeTableItem
        number={1}
        title="Assessment-1"
        date="1/10/2022 - 10/10/2022"
        status="Upcoming"
      />
      <TimeTableItem
        number={2}
        title="Assessment-2"
        date="1/10/2022 - 10/10/2022"
        status="Upcoming"
      />
      <TimeTableItem
        number={3}
        title="Assessment-3"
        date="1/10/2022 - 10/10/2022"
        status="Finish"
      />
      <TimeTableItem
        number={4}
        title="Assessment-4"
        date="1/10/2022 - 10/10/2022"
        status="Finish"
      />
      <TimeTableItem
        number={5}
        title="Assessment-5"
        date="1/10/2022 - 10/10/2022"
        status="Finish"
      />
    </MainPage>
  );
};

export default ExamTimetable;
