import React from 'react';
import {
    Card,
    CardBody,
    Button,
    Text,
    Flex,
    Heading,
    Image,
    Stack,
    CardFooter,
    ButtonGroup,
    Divider,
    HStack
} from "@chakra-ui/react";

const Facility = ({}) => {
    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            maxW={'container.xxl'}
            minH="70vh"
            px={8}
            mt={5}
            mb={16}
        >
            <HStack
                spacing={24}
                w={{ base: "80%", md: "100%" }}
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <CardFasilitas/>
                <CardFasilitas/>
                <CardFasilitas/>
            </HStack>
        </Flex>
    );
};

export default Facility;

// Component card
const CardFasilitas = ({title, subtitle, desc,ctoText, ctoLink}) => {
    return(
        <Card maxW='sm' shadow={'lg'}>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
