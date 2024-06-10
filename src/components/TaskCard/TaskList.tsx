import { FC } from 'react'
import { Task } from '../../types'
import TaskCard from './TaskCard'

interface TasksListProps {
  tasks: Task[]
}

const TasksLists: FC<TasksListProps> = ({ tasks }) => {
  return (
    <>
      {tasks.map((todo: Task) => (
        <TaskCard task={todo} key={`task-${todo.id}`} />
      ))}
    </>
  )
}

export default TasksLists
