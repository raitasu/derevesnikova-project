import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    Box,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {TasksState, updateTaskStatusAC} from "../../redux/taskReducer";
import {TaskRow} from "./taskRow";


export const TableTasks = () => {


    const {completedTasks, todayTasks, upcomingTasks} = useSelector((state: TasksState) => state);
    const dispatch = useDispatch();

    const handleTaskStatusChange = (taskId: number, newStatus: string) => {
        dispatch(updateTaskStatusAC(taskId, newStatus));
    };


    return (
        <Box minW='750px' >
            <Accordion defaultIndex={[0]} reduceMotion>
                <TableContainer width='1000vh'  >
                    <Box width="100%">
                        <Table variant="simple"   layout="fixed" whiteSpace="nowrap" overflowX='auto'>
                            <TableCaption>Тестовое задание для ИП Деревесникова Наталия Андреевна</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th maxW="25%">Задачи</Th>
                                    <Th maxW="25%">Дата</Th>
                                    <Th maxW="25%">Название</Th>
                                    <Th maxW="25%">Статус</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <AccordionItem as={Fragment}>
                                    <Tr bgColor="#E1E1FB">
                                        <Td>
                                            <AccordionButton>
                                                <Box flex="1">Выполненные задачи</Box>
                                                <AccordionIcon/>
                                            </AccordionButton>
                                        </Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                    </Tr>
                                    {completedTasks.map((task) => (
                                        <TaskRow
                                            key={task.id}
                                            task={task}
                                            onTaskStatusChange={handleTaskStatusChange}
                                            bgColor={task.status === "completed" ? "white" : task.status === "today" ? "#71FACA" : "#FFCCDD"}
                                        />
                                    ))}
                                </AccordionItem>
                                <AccordionItem as={Fragment}>
                                    <Tr bgColor="#E1E1FB">
                                        <Td>
                                            <AccordionButton>
                                                <Box flex="1">Задачи на сегодня</Box>
                                                <AccordionIcon/>
                                            </AccordionButton>
                                        </Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                    </Tr>
                                    {todayTasks.map((task) => (
                                        <TaskRow
                                            key={task.id}
                                            task={task}
                                            onTaskStatusChange={handleTaskStatusChange}
                                            bgColor={task.status === "completed" ? "white" : task.status === "today" ? "#71FACA" : "#FFCCDD"}
                                        />
                                    ))}
                                </AccordionItem>
                                <AccordionItem as={Fragment}>
                                    <Tr bgColor="#E1E1FB">
                                        <Td>
                                            <AccordionButton>
                                                <Box flex="1">Предстоящие задачи</Box>
                                                <AccordionIcon/>
                                            </AccordionButton>
                                        </Td>
                                        <Td></Td>
                                        <Td></Td>
                                        <Td></Td>
                                    </Tr>
                                    {upcomingTasks.map((task) => (
                                        <TaskRow
                                            key={task.id}
                                            task={task}
                                            onTaskStatusChange={handleTaskStatusChange}
                                            bgColor={task.status === "completed" ? "white" : task.status === "today" ? "#71FACA" : "#FFCCDD"}
                                        />
                                    ))}
                                </AccordionItem>
                            </Tbody>
                        </Table>
                    </Box>
                </TableContainer>
            </Accordion>
        </Box>
    );
};

