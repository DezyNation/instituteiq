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
        border={props.border}
        borderRadius={props.borderRadius}
        bg={props.bg}
        textDecorationLine={props.textDecorationLine}
        textAlign={props.textAlign}
        color={props.color}
        px={props.px}
        py={props.py}
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
      </Drawer>
    </>
  );
};

export default RightDrawer;
