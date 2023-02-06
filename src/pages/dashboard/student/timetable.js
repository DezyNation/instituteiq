import StudentDashboardSidebar from "@/Components/Layout Components/Sidebar/StudentDashboardSidebar";
import TimeTable from "@/Components/Student/TimeTable/TimeTable";
import { Flex } from "@chakra-ui/react";

export default function timetable() {
  return (
    <Flex>
      <StudentDashboardSidebar />
      <TimeTable />
    </Flex>
  );
}
