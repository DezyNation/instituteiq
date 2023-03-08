import Index from "@/Components/Admin/Branch Management/Index/Index";
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
