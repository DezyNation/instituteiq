import Index from "@/Components/Employee Management/index/Index";
import InchargeSidebar from "@/Components/Layout Components/Sidebar/InchargeSidebar";
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
