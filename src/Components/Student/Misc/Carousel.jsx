import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

const Carousel = ({ carouselButtons }) => {
  return (
    <Flex gap="10px" w="100%" mt="20px" alignItems="center">
      <Splide
        options={{
          rewind: true,
          width: "100%",
          gap: "60px",
          perPage: 5,
          perMove: 1,
          pagination: false,
          padding:"6%"
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
    </Flex>
  );
};

export default Carousel;
