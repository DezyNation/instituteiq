import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

const Carousel = ({ carouselButtons, type }) => {
  const changeStyle = (e) =>{
    var collection = e.target.parentElement.parentElement.parentElement.children
    for(var element of collection){
      element.firstElementChild.style.color="#8f8f8f"
      element.firstElementChild.style.backgroundColor="transparent"
    }
    e.target.parentElement.style.color="#fff"
    e.target.parentElement.style.backgroundColor="#000"
  }
  return (
    <Flex gap="10px" w="90%" mt="20px" alignItems="center">
      {type === "button" && (
        <Splide
          options={{
            rewind: true,
            width: "100%",
            gap: "60px",
            perPage: 5,
            perMove: 1,
            pagination: false,
            padding: "6%",
          }}
        >
          {carouselButtons.map((button, index) => {
            return (
              <SplideSlide key={`${button}_${index}`}>
                <Button
                  width="200px"
                  border="1px solid #D1D5DB"
                  h="40px"
                  mb="5px"
                  borderRadius="5px"
                  boxShadow="0 3px 2px 2px #D1D5DB"
                  bg="#FDFDFD"
                >
                  {button}
                </Button>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
      {type === "date" && (
        <Splide
          options={{
            rewind: true,
            width: "100%",
            gap: "60px",
            perPage: 5,
            perMove: 1,
            pagination: false,
            padding: "6%",
          }}
        >
          {carouselButtons.map((date, index) => {
            return (
              <SplideSlide key={`${date}_${index}`}>
                <Box
                onClick={changeStyle}
                  as="button"
                  borderRadius="40px"
                  w="50px"
                  fontSize="l"
                  h="83px"
                  textAlign="center"
                  color="#8f8f8f"
                >
                  <Text>{date[0]}</Text>
                  <Text>{date[1]}</Text>
                </Box>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </Flex>
  );
};

export default Carousel;
