export type Task = {
    id: number;
    date: string;
    title: string;
    status: string;
}

export type TasksState = {
    completedTasks: Task[];
    todayTasks: Task[];
    upcomingTasks: Task[];
}

type UpdateTaskStatusAction = {
    type: 'UPDATE_TASK_STATUS';
    payload: {
        taskId: number;
        newStatus: string;
    };
}

type ActionType = UpdateTaskStatusAction;

const initialState: TasksState = {
    completedTasks: [
        {
            id: 1,
            date: '01.05.2023',
            title: 'Тестовое - 1',
            status: 'completed',
        },
        {
            id: 2,
            date: '01.05.2023',
            title: 'Тестовое - 2',
            status: 'completed',
        },
        {
            id: 3,
            date: '01.05.2023',
            title: 'Тестовое - 3',
            status: 'completed',
        },
        {
            id: 4,
            date: '01.05.2023',
            title: 'Тестовое - 4',
            status: 'completed',
        }],
    todayTasks: [
        {
            id: 5,
            date: '02.05.2023',
            title: 'Собеседование - 1',
            status: 'today',
        },
        {
            id: 6,
            date: '02.05.2023',
            title: 'Собеседование - 2',
            status: 'today',
        },
        {
            id: 7,
            date: '02.05.2023',
            title: 'Собеседование - 3',
            status: 'today',
        },
        {
            id: 8,
            date: '02.05.2023',
            title: 'Собеседование - 4',
            status: 'today',
        }],
    upcomingTasks: [
        {
            id: 9,
            date: '03.05.2023',
            title: 'Проект - 1',
            status: 'upcoming',
        },
        {
            id: 10,
            date: '03.05.2023',
            title: 'Проект - 2',
            status: 'upcoming',
        },
        {
            id: 11,
            date: '03.05.2023',
            title: 'Проект - 3',
            status: 'upcoming',
        },
        {
            id: 12,
            date: '03.05.2023',
            title: 'Проект - 4',
            status: 'upcoming',
        }],
};

export const tasksReducer = (state: TasksState = initialState, action: ActionType): TasksState => {
    switch (action.type) {
        case 'UPDATE_TASK_STATUS':
            const {taskId, newStatus} = action.payload;
            const {completedTasks, todayTasks, upcomingTasks} = state;
            const updatedTasks = [...completedTasks, ...todayTasks, ...upcomingTasks].map(task => {
                if (task.id === taskId) {
                    return {...task, status: newStatus};
                }
                return task;
            });

            return {
                completedTasks: updatedTasks.filter(task => task.status === 'completed'),
                todayTasks: updatedTasks.filter(task => task.status === 'today'),
                upcomingTasks: updatedTasks.filter(task => task.status === 'upcoming'),
            };

        default:
            return state;
    }
};


export const updateTaskStatusAC = (taskId: number, newStatus: string) => {
    return {
        type: 'UPDATE_TASK_STATUS',
        payload: {
            taskId, newStatus
        }
    }
}