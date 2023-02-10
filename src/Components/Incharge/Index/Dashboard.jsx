import ToDoList from "@/Components/Layout Components/Misc/ToDoList";
import { Flex } from "@chakra-ui/react";
import ResponseCache from "next/dist/server/response-cache";
import React from "react";
import MainPage from "../../Layout Components/MainPage/MainPage";
import Cards from "../../Layout Components/Misc/Cards";
import CircularStat from "../../Layout Components/Misc/CircularStat";
import LeavesList from "./LeavesList";
import RecentCircular from "./RecentCircular";
import ResearchCircular from "./RecentCircular";

const Dashboard = () => {
  return (
    <MainPage>
      <Flex gap="40px" mt="50px">
        <Cards heading="No of Students" value="56" />
        <Cards heading="No of Staff" value="102" />
        <Cards heading="Overall Performance" value="98%" />
        <Cards heading="Overall Attendance" value="4%" />
      </Flex>
      <Flex mt="30px" w="100%" justifyContent="space-around">
        <CircularStat
          heading="Staff Attendance"
          value={59}
          legends={["Absent", "Present"]}
        />
        <CircularStat
          heading="Curiculum Progress"
          value={82}
          legends={["Pending", "Completed"]}
        />
        <LeavesList />
      </Flex>
      <Flex mt="30px" w="100%" justifyContent="space-around">
        <RecentCircular />
        <ToDoList />
      </Flex>
    </MainPage>
  );
};

export default Dashboard;
