import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/Components/Layout Components/Sidebar/Sidebar";
import MainPage from "@/Components/Index/MainPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Flex>
        <Sidebar />
        <MainPage />
      </Flex>
    </>
  );
}
