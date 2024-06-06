import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, HStack, Heading, Stack } from "@chakra-ui/react";
import SectionTitle from "./sectionTitle";

const VisiMisi = ({ visi, subVisi, misi, subMisi }) => {
  return (
    <Box>
      <SectionTitle
        setID="visi"
        title={"Visi dan Misi"}
        subtitle={"Ketahui visi dan misi Pondok Pesantren Al-Madinah"}
        color={"green.500"}
      />
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        maxW={"container.xl"}
        minH="70vh"
        px={8}
        mt={5}
        mb={16}
      >
        <HStack spacing={10}>
          <Stack
            spacing={4}
            w={{ base: "80%", md: "50%" }}
            align={["center", "center", "flex-start", "flex-start"]}
          >
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              color="green.500"
              textAlign={["center", "center", "left", "left"]}
            >
              {visi}
            </Heading>
            <Heading
              as="h2"
              size="md"
              color="gray.700"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={["center", "center", "justify", "justify"]}
            >
              {subVisi}
            </Heading>
          </Stack>
          <Stack
            spacing={4}
            w={{ base: "80%", md: "50%" }}
            align={["center", "center", "flex-start", "flex-start"]}
          >
            <Heading
              as="h1"
              size="xl"
              fontWeight="bold"
              color="green.500"
              textAlign={["center", "center", "left", "left"]}
            >
              {misi}
            </Heading>
            <Heading
              as="h2"
              size="md"
              color="gray.700"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={["center", "center", "justify", "justify"]}
            >
              {subMisi}
            </Heading>
          </Stack>
        </HStack>
      </Flex>
    </Box>
  );
};
VisiMisi.propTypes = {
  visi: PropTypes.string,
  subVisi: PropTypes.string,
  misi: PropTypes.string,
  subMisi: PropTypes.string,
};

VisiMisi.defaultProps = {
  visi: "Visi",
  misi: "Misi",
  subVisi:
    "Insan yang hafal, lafdzhon wama'nan, wa'amalan, watakalluman yang bermakna Seseorang yang hafal dalam pengucapan, pemahaman makna, tindakan, dan berbicara.",
  subMisi:
    "Menciptakan insan yang berkualitas, unggul ilmu, unggul amal, serta ibadahnya. Insan yang dermawan kepada sesama serta tunduk patuh terhadap Allah SWT dan nabi-nabi Nya",
  ctaText: "Daftar",
  ctaLink: "/psdb",
};

export default VisiMisi;
