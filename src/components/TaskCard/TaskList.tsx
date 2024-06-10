import { FC } from 'react'
import { Task } from '../../types'
import TaskCard from './TaskCard'

interface TasksListProps {
  tasks: Task[]
  filter: string
}

const TasksLists: FC<TasksListProps> = ({ tasks, filter }) => {
  const filteredTodos = filter ? tasks.filter((todo) => todo.title.toLowerCase().includes(filter.toLowerCase())) : tasks

  return (
    <>
      {filteredTodos.map((todo: Task) => (
        <TaskCard task={todo} key={`task-${todo.id}`} />
      ))}
    </>
  )
}

export default TasksLists
