import { Flex } from "@chakra-ui/react";
import Sidebar from "@/Components/Layout Components/Sidebar/Sidebar";
import ExamTimetable from "@/Components/Student/ExamTimetable/ExamTimetable";
import StudentDashboardSidebar from "@/Components/Layout Components/Sidebar/StudentDashboardSidebar";

export default function examtimetable() {
  return (
    <>
      <Flex>
        <StudentDashboardSidebar />
        <ExamTimetable />
      </Flex>
    </>
  );
}
