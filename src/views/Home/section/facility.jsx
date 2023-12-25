import React from "react";
import {
  Card,
  CardBody,
  Text,
  Flex,
  Heading,
  Image,
  Stack,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { Amtsilati, Tagaqquh, Tahfidzul } from "../../../assets/image";

const Facility = () => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      maxW={"container.xxl"}
      minH="80vh"
      px={8}
      mt={5}
      mb={16}
    >
      <HStack
        spacing={24}
        w={{ base: "80%", md: "100%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <CardFasilitas
          title={"Unit Tahfidzul Quran"}
          subtitle={
            "Program yang bertujuan untuk mengajarkan dan membimbing siswa dalam menghafal Al-Quran secara utuh. Program ini akan membantu siswa dalam mempelajari tajwid serta memperbaiki bacaan Al-Quran agar sesuai dengan kaidah-kaidah yang telah ditentukan."
          }
          image={Tahfidzul}
        />
        <CardFasilitas
          title={"Unit Tagaqquh Fiddin"}
          subtitle={
            "Program yang fokus pada pemahaman dan pengaplikasian ajaran agama Islam dalam kehidupan sehari-hari. Selama program ini, siswa akan mempelajari konsep-konsep dasar agama, seperti aqidah, fiqh, dan akhlak, serta diberikan kesempatan untuk berdiskusi dan mempraktikkan pengaplikasian ajaran tersebut dalam kehidupan sehari-hari."
          }
          image={Tagaqquh}
        />
        <CardFasilitas
          title={"Amtsilati (Program Membaca Kitab Kuning 6 Bulan – 1 Tahun)"}
          subtitle={
            "Program yang dirancang untuk membantu siswa dalam mempelajari kitab kuning, yaitu kumpulan kitab klasik dalam bahasa Arab yang digunakan dalam tradisi pesantren. Program ini dapat membantu siswa memahami konteks sejarah dan filosofi di balik kitab kuning dan juga mengajarkan cara membaca dan memahami bahasa Arab secara efektif dalam jangka waktu 6 bulan hingga 1 tahun."
          }
          image={Amtsilati}
        />
      </HStack>
    </Flex>
  );
};

export default Facility;

// Component card
const CardFasilitas = ({ title, subtitle, image }) => {
  return (
    <Card
      maxW={"sm"}
      shadow={"lg"}
      borderRadius={"2xl"}
      borderWidth={"2px"}
      borderColor={"blackAlpha.200"}
    >
      <CardBody>
        <Image src={image} alt={title} boxSize={"cover"} borderRadius="lg" />
        <Stack mt="6" spacing="5">
          <Heading size="md">{title}</Heading>
          <Text mt={"4rem"} align={"justify"} textIndent={"2rem"}>
            {subtitle}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
};
