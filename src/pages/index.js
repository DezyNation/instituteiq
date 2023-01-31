// import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import Index from "@/Components/Index/Index";
import StudentDashboardSidebar from "@/Components/Layout Components/Sidebar/StudentDashboardSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Flex>
        <StudentDashboardSidebar/>
        <Index />
      </Flex>
    </>
  );
}
