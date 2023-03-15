import StudentDashboardSidebar from "@/Components/Layout Components/Sidebar/StudentDashboardSidebar";
import Attendance from "@/Components/Student/Attendance/Attendance";
import { Flex } from "@chakra-ui/react";

export default function attendance() {
  return (
    <>
      <Flex>
        <StudentDashboardSidebar />
        <Attendance />
      </Flex>
    </>
  );
}
