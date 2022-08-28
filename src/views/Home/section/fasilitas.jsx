import React from 'react';
import PropTypes from "prop-types"
import {Link} from "react-router-dom";
import {Box, Button, Flex, Heading, Image, Stack} from "@chakra-ui/react";

import imgJumbotron from "../../../assets/image/jumbotron/Gedung.png"

const Fasilitas = ({
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
                w={{ base: "80%", md: "40%" }}
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
                    textAlign={["center", "center", "left", "left"]}
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
            <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
            </Box>
        </Flex>
    );
};
Fasilitas.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string,
}

Fasilitas.defaultProps = {
    title: "Al Madinah Diwek Jombang",
    subtitle: "Yayasan Al Madinah adalah sebuah yayasan yang terdiri dari Pondok Pesantren Putra, SMP, dan SMA",
    image: imgJumbotron,
    ctaText: "Mari Bergabung!",
    ctaLink: "/signup",
}

export default Fasilitas;
