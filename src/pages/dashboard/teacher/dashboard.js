import StudentDashboardSidebar from "@/Components/Layout Components/Sidebar/StudentDashboardSidebar";
import Dashboard from "@/Components/Teacher/Dashboard/Dashboard";
import StudentAssignment from "@/Components/Student/Student Assignment/StudentAssignment";
import { Flex } from "@chakra-ui/react";

export default function dashboard() {
  return (
    <>
      <Flex>
        <StudentDashboardSidebar />
        <Dashboard />
      </Flex>
    </>
  );
}
