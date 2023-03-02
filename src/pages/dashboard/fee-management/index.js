// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import InchargeSidebar from "@/Components/Layout Components/Sidebar/InchargeSidebar";
import Index from "@/Components/Fee Management/index/Index";


export default function Home() {
  return (
    <>
      <Flex>
        <InchargeSidebar />
        <Index />
      </Flex>
    </>
  );
}
