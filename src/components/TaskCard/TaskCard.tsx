import { FC } from 'react'
import { Task } from '../../types'

interface TaskCardProps {
  task: Task
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="card">
      <>
        {task.id}: {task.title}, {task.description}, resultado: {task.completed ? 'Completada' : 'Pendiente'}
      </>
    </div>
  )
}

export default TaskCard
