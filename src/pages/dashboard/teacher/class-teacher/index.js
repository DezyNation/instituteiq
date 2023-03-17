import { Inter } from "@next/font/google";
import { Flex } from "@chakra-ui/react";

import InchargeSidebar from "@/Components/Layout Components/Sidebar/InchargeSidebar";
import Index from "@/Components/Teacher/Class Teacher/Index";

const inter = Inter({ subsets: ["latin"] });

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