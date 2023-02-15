import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const StudyMaterialItem = ({ chapter, description, date }) => {
  return (
    <Card
      w="250px"
      // h="170px"
      p="10px"
      border="1px solid #BABCC0"
      borderRadius="12px"
      bg="#fff"
    >
      <CardHeader p="0">
        <Text color="#545454">{chapter}</Text>
      </CardHeader>
      <Divider bg="#B0B2B6" h="0.5px" mt="5px" />
      <CardBody p="0">
        <Box>
          <Text pt="2" fontSize="sm">
            {description}
          </Text>
        </Box>
      </CardBody>
      <Divider bg="#B0B2B6" h="0.5px" mt="25px" />
      <CardFooter p="0">
        <Flex w="100%" justifyContent="space-between">
          <Link href="" style={{ display: "inline", color: "#3948CD" }}>
            Download <DownloadIcon color="#3948CD" />
          </Link>
          <Text>{date}</Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default StudyMaterialItem;
