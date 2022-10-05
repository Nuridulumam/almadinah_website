import React from 'react';
import {Center, Circle, Text} from "@chakra-ui/react";

const NotFound = () => {
    return (
            <Center minH={'100vh'}>
                <Circle bg={'salmon'} maxW={'100%'}>
                    <Text fontSize={'2rem'} fontWeight={'500'} padding={'1rem'} textAlign={'center'} >
                        Maaf halaman tidak ditemukan.
                    </Text>
                </Circle>
            </Center>
    );
};

export default NotFound;
