import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const StudentAssignmentItem = ({
  chapter,
  description,
  startDate,
  dueDate,
}) => {
  return (
    <Card
      w="250px"
      h="180px"
      p="10px"
      border="1px solid #BABCC0"
      borderRadius="12px"
      bg="#fff"
    >
      <CardHeader>
        <Heading size="md">{chapter}</Heading>
      </CardHeader>
      <Divider bg="#B0B2B6" h="0.5px" mt="5px" />
      <CardBody>
        <Box>
          <Text pt="2" fontSize="sm">
            {description}
          </Text>
        </Box>
        <Link href="" style={{color:"#3948CD",textAlign:"right",display:"flex",justifyContent:"flex-end",marginTop:"5px"}}>Upload</Link>
        <Divider bg="#B0B2B6" h="0.5px" mb="5px" mt="10px"/>
        <Flex justifyContent="space-between">
          <Text fontSize="xs">{startDate}</Text>
          <Text fontSize="xs">{`Due: ${dueDate}`}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default StudentAssignmentItem;
