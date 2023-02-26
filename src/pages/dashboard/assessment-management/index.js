import InchargeSidebar from "@/Components/Layout Components/Sidebar/InchargeSidebar";
import Index from "@/Components/Assessment Management/Index/Index";
import { Flex } from "@chakra-ui/react";
import { FilesProvider } from "@/Components/Student/Student Assignment/FilesProvider";

export default function Home() {
  return (
    <>
      <FilesProvider>
        <Flex>
          <InchargeSidebar />
          <Index />
        </Flex>
      </FilesProvider>
    </>
  );
}
