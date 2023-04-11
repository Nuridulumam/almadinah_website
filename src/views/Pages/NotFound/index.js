import React from 'react';
import {Box, Center, Text} from "@chakra-ui/react";

const NotFound = () => {
    return (
            <Center minH={'100vh'}>
                <Box maxW={'100%'}>
                    <Text fontSize={'2rem'} fontWeight={'500'} padding={'1rem'} textAlign={'center'} >
                        Maaf halaman tidak ditemukan.
                    </Text>
                </Box>
            </Center>
    );
};

export default NotFound;
