import { FC } from 'react'
import { Task } from '../../types'
import css from './TaskCard.module.css'

export interface TaskCardProps {
  task: Task
  onTaskChanged: (task: Task) => void
}

const TaskCard: FC<TaskCardProps> = ({ task, onTaskChanged }) => {
  const handleChange = () => onTaskChanged({ ...task, completed: !task.completed })

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
