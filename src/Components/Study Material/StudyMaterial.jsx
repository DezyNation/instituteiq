import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import MainPage from "../Layout Components/MainPage/MainPage";
import Carousel from "../Misc/Carousel";
import StudyMaterialItem from "./StudyMaterialItem";

const StudyMaterial = () => {
  const studyMaterial = [
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      date: "13/2/22",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      date: "13/2/22",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      date: "13/2/22",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      date: "13/2/22",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      date: "13/2/22",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      date: "13/2/22",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      date: "13/2/22",
    },
    {
      chapter: "Chapter Name",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, alias",
      date: "13/2/22",
    },
  ];

  return (
    <MainPage heading="Study Material">
      <Carousel />
        <Grid
          gridTemplateRows="repeat(2, max-content)"
          h="100vh"
          gridTemplateColumns="repeat(auto-fit, minmax(250px,250px))"
          w="100%"
          mt="70px"
          ml="40px"
          gap="20px"
        >
          {studyMaterial.map((element) => {
            return (
              <StudyMaterialItem
                chapter={element.chapter}
                description={element.description}
                date={element.date}
              />
            );
          })}
        </Grid>
    </MainPage>
  );
};

export default StudyMaterial;
