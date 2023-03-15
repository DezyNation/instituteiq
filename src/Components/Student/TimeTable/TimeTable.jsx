import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Carousel from "../Misc/Carousel";
import TimeTableItem from "./TimeTableItem";

const TimeTable = () => {
  const timeTableItems = [
    { time: "8:30 - 9:30 AM", subject: "Maths", teacher: "Teacher" },
    { time: "8:30 - 9:30 AM", subject: "Science", teacher: "Teacher 2" },
    { time: "8:30 - 9:30 AM", subject: "Short Break", teacher:""},
    { time: "8:30 - 9:30 AM", subject: "Kannada", teacher: "Teacher 3" },
    { time: "8:30 - 9:30 AM", subject: "Hindi", teacher: "Teacher 4" },
  ];

  const createDates = () => {
    const carouselButtons = [];
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const d = new Date();
    d.setDate(d.getDate() - 4);
    for (var i = 1; i <= 7; i++) {
      d.setDate(d.getDate() + 1);
      const day = weekday[d.getDay()];
      carouselButtons.push([d.getDate(), day]);
    }
    return carouselButtons;
  };

  const createHeaderDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonth = months[new Date().getMonth()];
    return currentMonth;
  };

  return (
    <MainPage heading="Time Table">
      <Flex w="100%">
        <Heading
          as="h2"
          fontSize="xl"
          ml="30px"
        >{`${createHeaderDate()} ${new Date().getDate()}`}</Heading>
      </Flex>
      <Carousel carouselButtons={createDates()} type="date" />
      {timeTableItems.map((element,index)=>{
        return(
            <TimeTableItem key={`${element.subject.time}_${index}`} number={index+1} subject={element.subject} teacher={element.teacher} time={element.time}/>
        )
      })}
    </MainPage>
  );
};

export default TimeTable;
