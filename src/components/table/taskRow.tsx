import React from 'react';
import {Tr, Td, Select, AccordionPanel} from "@chakra-ui/react";
import {Task} from "../../redux/taskReducer";

interface TaskRowProps {
    task: Task;
    onTaskStatusChange: (taskId: number, newStatus: string) => void;
    bgColor: string;
}

export const TaskRow: React.FC<TaskRowProps> = ({ task, onTaskStatusChange, bgColor }) => {
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = event.target.value;
        onTaskStatusChange(task.id, newStatus);
    };

    return (
        <AccordionPanel as={Tr} key={task.id}>
            <Td></Td>
            <Td>{task.date}</Td>
            <Td>{task.title}</Td>
            <Td>
                <Select
                    value={task.status}
                    onChange={handleStatusChange}
                    bgColor={bgColor}
                >
                    <option value='completed'>Выполнено</option>
                    <option value='today'>В работе</option>
                    <option value='upcoming'>На паузе</option>
                </Select>
            </Td>
        </AccordionPanel>
    );
};

