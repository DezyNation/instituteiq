import InchargeSidebar from "@/Components/Layout Components/Sidebar/InchargeSidebar";
import Index from "@/Components/Assessment Management/Index/Index";
import { Flex } from "@chakra-ui/react";

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
