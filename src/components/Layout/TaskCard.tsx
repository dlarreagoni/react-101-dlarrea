import { FC } from 'react'
import { Task } from '../../types'

interface TaskCardProps {
    task: Task
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
    return (
        <div className='card'>
            <p>{task.id}: {task.title}, {task.description}, resultado: {task.completed ? 'Completada' : 'Pendiente'}</p>
        </div>
    )
}

export default TaskCard