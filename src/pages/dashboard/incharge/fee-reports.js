import { Flex } from "@chakra-ui/react";
import InchargeSidebar from "@/Components/Layout Components/Sidebar/InchargeSidebar";
import FeeReports from "@/Components/Incharge/Fee Reports/FeeReports";


export default function Home() {
  return (
    <>
      <Flex>
        <InchargeSidebar />
        <FeeReports />
      </Flex>
    </>
  );
}
