import StudentDashboardSidebar from "@/Components/Layout Components/Sidebar/StudentDashboardSidebar";
import StudentAssignment from "@/Components/Student Assignment/StudentAssignment";
import { Flex } from "@chakra-ui/react";

export default function studentassignment() {
  return (
    <>
      <Flex>
        <StudentDashboardSidebar />
        <StudentAssignment />
      </Flex>
    </>
  );
}
