import { Grid } from "@chakra-ui/react";
import React from "react";
import MainPage from "../Layout Components/MainPage/MainPage";
import Carousel from "../Misc/Carousel";
import StudentAssignmentItem from "./StudentAssignmentItem";

const StudentAssignment = () => {
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
      <Carousel />
      <Grid
        gridTemplateRows="repeat(2, max-content)"
        h="100vh"
        gridTemplateColumns="repeat(auto-fit, minmax(250px,250px))"
        w="100%"
        mt="70px"
        ml="40px"
        gap="20px"
      >
        {assignments.map((element) => {
          return (
            <StudentAssignmentItem
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
