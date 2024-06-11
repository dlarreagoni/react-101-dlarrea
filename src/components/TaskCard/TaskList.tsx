import { FC } from 'react'
import useTasksUtils from '../../hooks/useTasksUtils'
import { Task } from '../../types'
import TaskCard from './TaskCard'

interface TasksListProps {
  tasks: Task[]
  filter: string
  onTaskChanged: (task: Task) => void
}

const TasksLists: FC<TasksListProps> = ({ tasks, filter, onTaskChanged }) => {
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
        <TaskCard task={todo} key={`task-${todo.id}`} onTaskChanged={onTaskChanged} />
      ))}
    </>
  )
}

export default TasksLists
