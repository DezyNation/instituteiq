import { Flex } from "@chakra-ui/react";
import Sidebar from "@/Components/Layout Components/Sidebar/Sidebar";
import ExamTimetable from "@/Components/ExamTimetable/ExamTimetable";


export default function examtimetable() {
    return (
      <>
        <Flex>
          <Sidebar />
          <ExamTimetable />
        </Flex>
      </>
    );
  }