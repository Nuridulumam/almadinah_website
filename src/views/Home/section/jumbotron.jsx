import React from 'react';
import {Box, Flex, Heading, Text} from "@chakra-ui/react";

import imgJumbotron from "../../../assets/image/jumbotron/jumbotron.png"

const Jumbotron = () => {
    return (
        <Flex wrap={'wrap'}
              borderRadius={{base:'auto', md:'3xl'}}
              backgroundImage={imgJumbotron}
              backgroundRepeat={'no-repeat'}
              backgroundSize={{base:'200% 100%', md:'cover'}}
              w={{base:'auto', md:'8xl'}}
              h={{base:'xs', md:'527px'}}
              mb={{base:3, md:20}}
              mt={{base:3, md:100}}
              alignItems={'center'}
        >
            <Box pl={{base:7}} w={{base: '70%', md:'40%'}} >
                <Heading fontSize={'4xl'} color={'white'}>Al Madinah Diwek-Jombang</Heading>
                <Text fontSize={'2xl'} fontWeight={'bold'} color={'white'}>"Pondok, SMP, MA"</Text>
            </Box>
        </Flex>
    );
};

export default Jumbotron;
