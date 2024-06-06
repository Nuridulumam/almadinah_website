import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

import imgJumbotron from "../../../assets/image/jumbotron/jumbotron.png";

const Jumbotron = () => {
  return (
    <Flex
      wrap={"wrap"}
      borderRadius={{ base: "2xl", md: "3xl", lg: "3xl" }}
      backgroundImage={imgJumbotron}
      backgroundRepeat={"no-repeat"}
      backgroundSize={{ base: "150%", lg: "cover" }}
      w={{ base: "3xl", lg: "86vw" }}
      h={{ base: "50vh", lg: "70vh" }}
      mb={{ base: 3, lg: 20 }}
      mt={{ base: 3, lg: 100 }}
      alignItems={"end"}
    >
      <Box
        alignItems={"center"}
        textAlign={{ base: "left", md: "left" }}
        pl={{ base: "13rem", md: 10 }}
        pb={{ base: 10, md: "10rem", lg: "2rem" }}
        w={{ base: "75%", md: "70%", lg: "40%" }}
      >
        <Heading fontSize={{ base: "2xl", md: "4xl" }} color={"white"}>
          YAYASAN AL MADINAH TEBUIRENG JOMBANG
        </Heading>
      </Box>
    </Flex>
  );
};

export default Jumbotron;
