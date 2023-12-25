import React from 'react';
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import {Box, Button, Flex, Heading, Image, Stack} from "@chakra-ui/react";

import imgJumbotron from "../../../assets/image/jumbotron/Gedung.png"

const Tentang = ({
                       title,
                       subtitle,
                       image,
                       ctaLink,
                       ctaText,
                   }) => {
    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            maxW={'container.xl'}
            minH="70vh"
            px={8}
            mt={5}
            mb={16}
        >
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
                    {title}
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
                    {subtitle}
                </Heading>
                <Link to={ctaLink}>
                    <Button
                        colorScheme="green"
                        borderRadius="8px"
                        py="4"
                        px="4"
                        lineHeight="1"
                        size="md"
                    >
                        {ctaText}
                    </Button>
                </Link>
            </Stack>
            <Box w={{ base: "80%", sm: "40%", md: "40%" }} mb={{ base: 12, md: 0 }}>
                <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
            </Box>
        </Flex>
    );
};
Tentang.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
}

Tentang.defaultProps = {
    title: "Pondok Pesantren Al Madinah",
    subtitle: "Pondok Pesantren Al Madinah adalah sebuah pondok putra/putri yang terdiri dari Pesantren Putra Darul Iman, Pesantren Putri Umi Kulsum Adnan, SMP, dan MA yang terletak di Kecamatan Diwek, Jombang",
    image: imgJumbotron,
    ctaText: "Daftar",
    ctaLink: "/psdb",
}

export default Tentang;
