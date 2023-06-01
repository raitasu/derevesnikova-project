interface Task {
    id: number;
    date: string;
    title: string;
    status: string;
}

interface TasksState {
    completedTasks: Task[];
    todayTasks: Task[];
    upcomingTasks: Task[];
}

interface UpdateTaskStatusAction {
    type: 'UPDATE_TASK_STATUS';
    payload: {
        taskId: number;
        newStatus: string;
    };
}

type ActionType = UpdateTaskStatusAction;

const initialState: TasksState = {
    completedTasks: [],
    todayTasks: [],
    upcomingTasks: [],
};

export const tasksReducer = (state: TasksState = initialState, action: ActionType): TasksState => {
    switch (action.type) {
        case 'UPDATE_TASK_STATUS':
            const {taskId, newStatus} = action.payload;
            const {completedTasks, todayTasks, upcomingTasks} = state;

            // Находим задачу по taskId и обновляем её статус
            const updatedTask = findTaskById([...completedTasks, ...todayTasks, ...upcomingTasks], taskId);

            if (!updatedTask) {
                return state; // Возвращаем текущее состояние, если задача не найдена
            }

            updatedTask.status = newStatus;

            // Обновляем состояние задач в соответствующих колонках
            return {
                completedTasks: newStatus === 'completed' ? [...completedTasks, updatedTask] : completedTasks.filter(task => task.id !== taskId),
                todayTasks: newStatus === 'today' ? [...todayTasks, updatedTask] : todayTasks.filter(task => task.id !== taskId),
                upcomingTasks: newStatus === 'upcoming' ? [...upcomingTasks, updatedTask] : upcomingTasks.filter(task => task.id !== taskId),
            };

        default:
            return state;
    }
};

const findTaskById = (tasks: Task[], taskId: number): Task | undefined => {
    return tasks.find(task => task.id === taskId);
};
