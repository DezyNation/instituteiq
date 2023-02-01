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

const StudyMaterialItem = ({chapter,description,date}) => {
  return (
    <Card
      w="250px"
      h="170px"
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
        <Divider bg="#B0B2B6" h="0.5px" mt="25px" />
        <Flex justifyContent="space-between">
          <Link href="" style={{ display: "inline", color: "#3948CD" }}>
            Download <DownloadIcon color="#3948CD" />
          </Link>
          <Text>{date}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default StudyMaterialItem;
