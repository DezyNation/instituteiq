import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Carousel from "../Misc/Carousel";

const TimeTable = () => {
  //     var d = new Date()
  // d.setDate(d.getDate()-9)
  // d.getDate()

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
        >{`${createHeaderDate()}${new Date().getDate()}`}</Heading>
      </Flex>
      <Carousel carouselButtons={createDates()} type="date" />
    </MainPage>
  );
};

export default TimeTable;
