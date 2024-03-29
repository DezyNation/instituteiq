import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import MainPage from "../../Layout Components/MainPage/MainPage";
import Carousel from "../Misc/Carousel";
import StudyMaterialItem from "./StudyMaterialItem";

const StudyMaterial = () => {
  const carouselButtons = ["Subject-1","Subject-2","Subject-3","Subject-4","Subject-5","Subject-6","Subject-7","Subject-8"];
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
      <Carousel carouselButtons={carouselButtons} type="button"/>
      <Grid
        gridTemplateRows="repeat(2, max-content)"
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
