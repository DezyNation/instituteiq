// import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import StudentDashboardSidebar from "@/Components/Layout Components/Sidebar/StudentDashboardSidebar";
import StudyMaterial from "@/Components/Study Material/StudyMaterial";

export default function studymaterial() {
  return (
    <>
      <Flex>
        <StudentDashboardSidebar/>
        <StudyMaterial />
      </Flex>
    </>
  );
}
