import React from 'react';
import {ChakraProvider, Flex} from '@chakra-ui/react'
import {TableTasks} from "./components/table";
import {Header} from "./components/header";
import {Bar} from "./components/bar";

export const App = () => {
    return <ChakraProvider>
        <Header/>
        <Flex>
            <Bar/>
            <TableTasks/>
        </Flex>
    </ChakraProvider>
};
