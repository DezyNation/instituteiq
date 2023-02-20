import CPRightSide from "@/Components/Curriculum Progress/Index/CPRightSide";
import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import LeftSide from "@/Components/Layout Components/Misc/LeftSide";
import { HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import ASSMRightSide from "./ASSMRightSide";

export const classVAssignmentData = [
  {
    classAndSection: "V-A",
    subject : "Mathematics",
    data: [
      {
        title: "Assignment title 1",
        uploadTime: "9:50",
        reviewed: 30,
        pendingReviews: 20,
        submissionRate: 82,
      },
      {
        title: "Assignment title 2",
        uploadTime: "9:50",
        reviewed: 30,
        pendingReviews: 20,
        submissionRate: 52,
      },
    ],
  },
];

const Index = () => {
  const [assignmentDataToShow, setAssignmentDataToShow] = useState();
  return (
    <MainPage page={"assessment-management"}>
      <HStack alignItems={"flex-start"}>
        <LeftSide
          page="assessment-management"
          heading="Your Class : "
          setAssignmentDataToShow={setAssignmentDataToShow}
        />
        <ASSMRightSide assignmentDataToShow={assignmentDataToShow}/>
      </HStack>
    </MainPage>
  );
};

export default Index;
