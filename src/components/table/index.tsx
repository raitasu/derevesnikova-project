import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Code,
    Heading, Select,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import React, {Fragment} from "react";


export const Example = () => {
    return (
        <Box p="6">
            <Accordion defaultIndex={[0]} reduceMotion>
                <TableContainer>
                    <Table variant="simple">
                        <TableCaption>Тестовое задание для ИП Деревесникова Наталия Андреевна</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Задачи</Th>
                                <Th>Дата</Th>
                                <Th>Название</Th>
                                <Th>Статус</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <AccordionItem as={Fragment}>
                                <Tr bgColor={'#E1E1FB'}>
                                    <Td>
                                        <AccordionButton>
                                            <Box>
                                                Выполненные задачи
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                    </Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>
                                <AccordionPanel as={Tr}>
                                    <Td/>
                                    <Td>01.05.2023</Td>
                                    <Td>Тестовое</Td>
                                    <Td>
                                        <Select >
                                            <option value='option1'>Выполнено</option>
                                            <option value='option2'>На паузе</option>
                                            <option value='option3'>В работе</option>
                                        </Select>
                                    </Td>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem as={Fragment}>
                                <Tr bgColor={'#E1E1FB'}>
                                    <Td>
                                        <AccordionButton>
                                            <Box>
                                                Задачи на сегодня
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                    </Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>
                                <AccordionPanel as={Tr}>
                                    <Td/>
                                    <Td>02.05.2023</Td>
                                    <Td>Собеседование</Td>
                                    <Td>
                                        <Select >
                                            <option value='option1'>Выполнено</option>
                                            <option value='option2'>На паузе</option>
                                            <option value='option3'>В работе</option>
                                        </Select>
                                    </Td>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem as={Fragment}>
                                <Tr bgColor={'#E1E1FB'}>
                                    <Td>
                                        <AccordionButton>
                                            <Box>
                                                Предстоящие задачи
                                            </Box>
                                            <AccordionIcon/>
                                        </AccordionButton>
                                    </Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>
                                <AccordionPanel as={Tr}>
                                    <Td/>
                                    <Td>03.05.2023</Td>
                                    <Td>Проект</Td>
                                    <Td>
                                        <Select >
                                            <option value='option1'>Выполнено</option>
                                            <option value='option2'>На паузе</option>
                                            <option value='option3'>В работе</option>
                                        </Select>
                                    </Td>
                                </AccordionPanel>
                            </AccordionItem>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Accordion>
        </Box>
    );
};

