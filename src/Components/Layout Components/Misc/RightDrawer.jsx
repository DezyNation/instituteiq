import CPDrawer from "@/Components/Curriculum Progress/Index/CPDrawer";
import EMDrawer from "@/Components/Exam Management/Index/EMDrawer";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Circle,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const RightDrawer = (props) => {
  const firstField = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDrawerClose = () => {
    onClose();
  };

  return (
    <>
      <Button
        border="1px solid #EEEEEE"
        borderRadius="18px"
        bg="#FFFDFD"
        textDecorationLine="none"
        textAlign={"center"}
        color="#1C80DD"
        px="10px"
        onClick={onOpen}
      >
        {props.buttonText}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={handleDrawerClose}
        closeOnOverlayClick={false}
      >
        <DrawerOverlay />
        {props.page === "curriculum-progress" && <CPDrawer />}
        {props.page === "exam-management" && <EMDrawer />}
        {props.page === "fee-management" && <EMDrawer />}
      </Drawer>
    </>
  );
};

export default RightDrawer;
