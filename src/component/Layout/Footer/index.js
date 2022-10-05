import React from 'react';
import {Box, Flex, Image, Stack, Text} from "@chakra-ui/react";

import Instagram from "../../../assets/image/social-icon/instagram 1.png"
import Youtube from "../../../assets/image/social-icon/youtube.png"
import Facebook from "../../../assets/image/social-icon/facebook.png"
import Foot_social from "../../../assets/image/footer/foot_social.png"

const Footer = () => {
    return (
        <>
           <Box backgroundImage={Foot_social} backgroundSize={'cover'} w={'100%'} p={3}>
               <Flex align={'center'} py={2} justify={'center'}>
                   <Stack direction={{base:"column", md:"row"}} spacing={5}>
                       <Text fontSize={{base:"xl", md:"2xl"}}
                             fontWeight={'bold'}
                             color={'white'}>
                           Temukan kami di media sosial
                       </Text>
                       <Stack justify={'center'}
                              direction={'row'} s
                              spacing={5}>
                           <Image src={Instagram} w={9} h={9}/>
                           <Image src={Facebook} w={9} h={9}/>
                           <Image src={Youtube} w={9} h={9}/>
                       </Stack>
                   </Stack>
               </Flex>
           </Box>
           <Box bg={'black'} w={'100%'} p={3}>
               <Text fontSize={'sm'}
                     textAlign={'center'}
                     color={'white'}>
                   Copyright &copy; 2022 Al Madinah Diwek Jombang
               </Text>
           </Box>
        </>
    );
};



export default Footer;
