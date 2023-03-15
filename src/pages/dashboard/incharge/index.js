import Dashboard from "@/Components/Incharge/Index/Dashboard";
import InchargeSidebar from "@/Components/Layout Components/Sidebar/InchargeSidebar";
import { Flex } from "@chakra-ui/react";

export default function index() {
  return (
    <>
      <Flex>
        <InchargeSidebar />
        <Dashboard />
      </Flex>
    </>
  );
}
