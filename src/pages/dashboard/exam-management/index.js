
import Index from "@/Components/Exam Management/Index/Index";
import CPSidebar from "@/Components/Layout Components/Sidebar/CPSidebar";
import { Flex } from "@chakra-ui/react";

export default function index() {
  return (
    <>
      <Flex>
        <CPSidebar />
        <Index />
      </Flex>
    </>
  );
}
