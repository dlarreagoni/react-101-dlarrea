import { FC } from 'react'
import { Task } from '../../types'
import TaskCard from './TaskCard'
import useTasksUtils from '../../hooks/useTasksUtils'

interface TasksListProps {
  tasks: Task[]
  filter: string
}

const TasksLists: FC<TasksListProps> = ({ tasks, filter }) => {
  const { filterTasks } = useTasksUtils()
  const filteredTodos = filterTasks(tasks, filter)

  return (
    <>
      {filter && (
        <p>
          {filteredTodos.length} encontradas; Filtrando por la palabra: {filter}
        </p>
      )}
      {!filter && <p>Sin filtro</p>}
      {filteredTodos.map((todo: Task) => (
        <TaskCard task={todo} key={`task-${todo.id}`} />
      ))}
    </>
  )
}

export default TasksLists
