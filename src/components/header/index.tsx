import React from 'react';
import {Avatar, Box, Flex, Text} from "@chakra-ui/react";

export const Header = () => {
    return (
        <Flex pr='60px' pl='60px' height='100px' borderBottom='1px solid #E1E1E1' justifyContent='space-between'
              alignItems='center'>
            <Flex alignItems='center' gap='10px'>
                <Box height='40px' width='40px' bg='#E2E2EA' borderRadius='8px'></Box>
                <Text fontWeight='700' fontSize='24px'> Проект </Text>
            </Flex>
            <Flex gap='20px'>
                <Avatar/>
                <Flex flexDirection='column'>
                    <Text fontWeight='700'>Иванов В.А</Text>
                    <Text color='#9A9AB0' fontSize='12px'>Должность</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
