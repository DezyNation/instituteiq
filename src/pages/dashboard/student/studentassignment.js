import StudentDashboardSidebar from "@/Components/Layout Components/Sidebar/StudentDashboardSidebar";
import { FilesProvider } from "@/Components/Student/Student Assignment/FilesProvider";
import StudentAssignment from "@/Components/Student/Student Assignment/StudentAssignment";
import { Flex } from "@chakra-ui/react";

export default function studentassignment() {
  return (
    <>
      <Flex>
        <FilesProvider>
          <StudentDashboardSidebar />
          <StudentAssignment />
        </FilesProvider>
      </Flex>
    </>
  );
}
