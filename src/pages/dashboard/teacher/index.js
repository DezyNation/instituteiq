import StudentDashboardSidebar from "@/Components/Layout Components/Sidebar/StudentDashboardSidebar";
import Dashboard from "@/Components/Teacher/Dashboard/Dashboard";
import { Flex } from "@chakra-ui/react";

export default function Index() {
  return (
    <>
      <Flex>
        <StudentDashboardSidebar />
        <Dashboard />
      </Flex>
    </>
  );
}
