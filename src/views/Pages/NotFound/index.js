import React from 'react';
import {AspectRatio, Center, Circle, Heading} from "@chakra-ui/react";

const NotFound = () => {
    return (
        <AspectRatio ratio={16/9}>
            <Center>
                <Circle bg={'salmon'} maxW={'100%'}>
                    <Heading padding={'2rem'} textAlign={'center'} >
                        Maaf halaman tidak ditemukan.
                    </Heading>
                </Circle>
            </Center>
        </AspectRatio>
    );
};

export default NotFound;
