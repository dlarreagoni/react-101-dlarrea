import { FC, useContext } from 'react'
import { Task } from '../../types'
import { TasksContext } from '../TasksContext/TasksContext'
import css from './TaskCard.module.css'

export interface TaskCardProps {
  task: Task
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const { updateTask } = useContext(TasksContext)
  const handleChange = () => updateTask({ ...task, completed: !task.completed })

  return (
    <div className={`${css.card} ${task.completed ? css.completed : css.incomplete}`}>
      <div className={css.check}>
        <input type="checkbox" checked={task.completed} onChange={handleChange} />
      </div>
      <div className={css.info}>
        <div className={css.title}>{task.title}</div>
        {task.description && <div className={css.description}>{task.description}</div>}
      </div>
    </div>
  )
}

export default TaskCard
