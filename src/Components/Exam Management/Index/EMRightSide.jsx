import RightDrawer from "@/Components/Layout Components/Misc/RightDrawer";
import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import ExamItem from "./ExamItem";

const EMRightSide = () => {
  const examItemList = [
    {
      title: "Assessment-1",
      date: "1/10/2022 - 10/10/2022",
      status: "Completed",
    },
    {
      title: "Assessment-2",
      date: "1/10/2022 - 10/10/2022",
      status: "Completed",
    },
    {
      title: "Assessment-3",
      date: "1/10/2022 - 10/10/2022",
      status: "Completed",
    },
    {
      title: "Assessment-4",
      date: "1/10/2022 - 10/10/2022",
      status: "Completed",
    },
    {
      title: "Assessment-5",
      date: "1/10/2022 - 10/10/2022",
      status: "Completed",
    },
  ];

  const colors = ["#3CCF4E", "#1C80DD", "#FC8F2B"];
  var colorIndex = -1;
  return (
    <Box p="10px" w="70%" pl="40px" position={"relative"} left="300px">
      <HStack justifyContent={"space-between"} alignItems="center">
        <Heading
          as="h2"
          fontSize="30px"
          fontWeight={400}
          color="#1b1b1b"
          mb="30px"
        >
          Exam Management
        </Heading>

        <RightDrawer
          buttonText="+ Add"
          page={"exam-management"}
        />
      </HStack>

      {examItemList.map((item, index) => {
        return (
          <ExamItem
            key={`${item}_${index}`}
            number={index + 1}
            title={item.title}
            date={item.date}
            status={item.status}
          />
        );
      })}
    </Box>
  );
};

export default EMRightSide;
