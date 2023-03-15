import { Grid } from "@chakra-ui/react";
import React from "react";
import MainPage from "../../Layout Components/MainPage/MainPage";
import Carousel from "../Misc/Carousel";
import StudentAssignmentItem from "./StudentAssignmentItem";

const StudentAssignment = () => {
  const carouselButtons = [
    "Subject-1",
    "Subject-2",
    "Subject-3",
    "Subject-4",
    "Subject-5",
    "Subject-6",
    "Subject-7",
    "Subject-8",
  ];

  const assignments = [
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      startDate: "13/2/22 8:30 AM",
      dueDate: "13/2/22 8:30 AM",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      startDate: "13/2/22 8:30 AM",
      dueDate: "13/2/22 8:30 AM",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      startDate: "13/2/22 8:30 AM",
      dueDate: "13/2/22 8:30 AM",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      startDate: "13/2/22 8:30 AM",
      dueDate: "13/2/22 8:30 AM",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      startDate: "13/2/22 8:30 AM",
      dueDate: "13/2/22 8:30 AM",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      startDate: "13/2/22 8:30 AM",
      dueDate: "13/2/22 8:30 AM",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      startDate: "13/2/22 8:30 AM",
      dueDate: "13/2/22 8:30 AM",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      startDate: "13/2/22 8:30 AM",
      dueDate: "13/2/22 8:30 AM",
    },
  ];

  return (
    <MainPage heading="Student Assignment">
      <Carousel carouselButtons={carouselButtons} type="button" />
      <Grid
        gridTemplateRows="repeat(2, max-content)"
        gridTemplateColumns="repeat(auto-fit, minmax(250px,250px))"
        w="100%"
        mt="70px"
        h="200vh"
        ml="40px"
        gap="20px"
    >
        {assignments.map((element, index) => {
          return (
            <StudentAssignmentItem
              key={`${element.chapter}_${index}`}
              chapter={element.chapter}
              description={element.description}
              startDate={element.startDate}
              dueDate={element.dueDate}
            />
          );
        })}
      </Grid>
    </MainPage>
  );
};

export default StudentAssignment;
