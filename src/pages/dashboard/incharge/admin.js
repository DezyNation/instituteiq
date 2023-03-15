import FeeManagement from "@/Components/Incharge/Fee Management/FeeManagement";
import InchargeSidebar from "@/Components/Layout Components/Sidebar/InchargeSidebar";
import { Flex } from "@chakra-ui/react";

export default function index() {
  return (
    <>
      <Flex>
        <InchargeSidebar />
        <FeeManagement page="admin" />
      </Flex>
    </>
  );
}
