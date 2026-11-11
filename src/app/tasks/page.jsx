import { AddTask } from '@/components/AddTask';
import TasksCard from '@/components/TasksCard';
import { createTask } from '@/lib/actions';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TasksPage = async () => {
    const tasks = await getTasks();
    return (
        <div>
            <h2>Tasks : {tasks.length}</h2>
            <AddTask createTask = {createTask}/>
            <div className='grid grid-cols-3 gap-4'>
                {
                    tasks.map((task) => <TasksCard key={task.id} task={task} />)
                }
            </div>
        </div>
    );
};

export default TasksPage;