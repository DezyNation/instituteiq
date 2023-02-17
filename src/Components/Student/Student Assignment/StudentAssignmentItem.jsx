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
import React from "react";
import UploadModal from "./UploadModal";

const StudentAssignmentItem = ({
  chapter,
  description,
  startDate,
  dueDate,
}) => {

  return (
    <Card
      w="250px"
      p="10px"
      border="1px solid #BABCC0"
      borderRadius="12px"
      bg="#fff"
    >
      <CardHeader p="0">
        <Heading size="md">{chapter}</Heading>
      </CardHeader>
      <Divider bg="#B0B2B6" h="0.5px" mt="5px" />
      <CardBody p="0">
        <Box>
          <Text pt="2" fontSize="sm">
            {description}
          </Text>
        </Box>
        <UploadModal
          button={"Upload"}
          chapter={chapter}
        />
        <Divider bg="#B0B2B6" h="0.5px" mb="5px" mt="10px" />
        <Flex justifyContent="space-between">
          <Text fontSize="xs">{startDate}</Text>
          <Text fontSize="xs">{`Due: ${dueDate}`}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default StudentAssignmentItem;
