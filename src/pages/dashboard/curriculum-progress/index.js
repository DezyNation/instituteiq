import Index from "@/Components/Curriculum Progress/Index/Index";
import CPSidebar from "@/Components/Layout Components/Sidebar/CPSidebar";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex>
        <CPSidebar />
        <Index />
      </Flex>
    </>
  );
}
