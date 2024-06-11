import { FC, useContext } from 'react'
import useTasksUtils from '../../hooks/useTasksUtils'
import { Task } from '../../types'
import { SearchBarContext } from '../TasksContext/SearchBarContext'
import { TasksContext } from '../TasksContext/TasksContext'
import TaskCard from './TaskCard'

export interface TasksListProps {}

const TasksLists: FC<TasksListProps> = () => {
  const { filter } = useContext(SearchBarContext)
  const { tasks } = useContext(TasksContext)

  const { filterTasks } = useTasksUtils()
  const filteredTodos = filterTasks(tasks, filter)

  return (
    <>
      {filter.searchTerm && (
        <p>
          <small>
            {filterTasks.length} encontradas, filtrando por la palabra: {filter.searchTerm}
          </small>
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
