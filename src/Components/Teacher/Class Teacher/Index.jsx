import LeavesList from "@/Components/Incharge/Index/LeavesList";
import RecentCircular from "@/Components/Incharge/Index/RecentCircular";
import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import Cards from "@/Components/Layout Components/Misc/Cards";
import CircularStat from "@/Components/Layout Components/Misc/CircularStat";
import ToDoList from "@/Components/Layout Components/Misc/ToDoList";
import { Flex } from "@chakra-ui/react";
import ResponseCache from "next/dist/server/response-cache";
import React from "react";
import LeaderBoard from "@/Components/Incharge/Index/LeaderBoard";

const Index = () => {
  return (
    <MainPage>
      <Flex gap="40px" mt="50px">
        <Cards heading="No of Students" value="56" />
        <Cards heading="Overall Performance" value="98%" />
        <Cards heading="Overall Attendance" page="class-teacher" value="4%" />
        <Cards heading="Curriculum Progress" value="102" />
      </Flex>
      <Flex mt="30px" w="100%" justifyContent="space-around">
        <CircularStat
          heading="Your Attendance"
          page="class-teacher"
          value={59}
          legends={["Absent", "Present"]}
          />
        <CircularStat
          heading="Assignment Submission Rate"
          page="class-teacher"
          value={82}
          legends={["Pending", "Completed"]}
        />
        <LeavesList page="class-teacher" />
      </Flex>
      <Flex mt="30px" w="100%" justifyContent="space-around">
        <LeaderBoard />
        <RecentCircular page="class-teacher"/>
        <ToDoList />
      </Flex>
    </MainPage>
  );
};

export default Index;