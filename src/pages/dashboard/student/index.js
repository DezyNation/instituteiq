// import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import StudentDashboardSidebar from "@/Components/Layout Components/Sidebar/StudentDashboardSidebar";
import Index from "@/Components/Student/Index/Index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Flex>
        <StudentDashboardSidebar />
        <Index />
      </Flex>
    </>
  );
}
