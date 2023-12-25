import React from 'react';
import {Box, Center, Heading, Text} from "@chakra-ui/react";

const SectionTitle = ({
                          title,
                          subtitle,
                          color,
                          colorSub,
                          fontSize,
                          fontWeight
}) => {
    return (
        <Box>
            <Center>
                <Heading color={color}>{title}</Heading>
            </Center>
            <Text
                color={colorSub}
                fontSize={fontSize}
                fontWeight={fontWeight}
                mt={2}
                align={'center'}
            >
                {subtitle}
            </Text>
        </Box>
    );
};

export default SectionTitle;
