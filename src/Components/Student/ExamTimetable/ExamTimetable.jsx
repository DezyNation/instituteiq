import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Header from "../../Layout Components/Header/Header";
import MainPage from "../../Layout Components/MainPage/MainPage";
import ExamTimeTableItem from "./ExamTimeTableItem";

const ExamTimetable = () => {
  const examTimeTableItem = [
    {
      title: "Assessment-1",
      date: "1/10/2022 - 10/10/2022",
      status: "Upcoming",
    },
    {
      title: "Assessment-2",
      date: "1/10/2022 - 10/10/2022",
      status: "Upcoming",
    },
    {
      title: "Assessment-3",
      date: "1/10/2022 - 10/10/2022",
      status: "Finish",
    },
    {
      title: "Assessment-4",
      date: "1/10/2022 - 10/10/2022",
      status: "Finish",
    },
    {
      title: "Assessment-5",
      date: "1/10/2022 - 10/10/2022",
      status: "Finish",
    },
  ];

  return (
    <MainPage heading="Exam Timetable">
      {examTimeTableItem.map((item, index) => {
        return (
          <ExamTimeTableItem
            key={`${item}_${index}`}
            number={index + 1}
            title={item.title}
            date={item.date}
            status={item.status}
          />
        );
      })}
    </MainPage>
  );
};

export default ExamTimetable;
