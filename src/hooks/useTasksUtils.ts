import { Filter } from '../components/TasksContext/SearchBarContext'
import { Task } from '../types'

const filterTasks = (tasks: Task[], filter?: Filter): Task[] => {
  let result = [...tasks]
  if (filter?.searchTerm) {
    result = result.filter((task) => task.title.includes(filter.searchTerm))
  }
  if (filter?.onlyCompleted) {
    result = result.filter((task) => !task.completed)
  }
  return result
}

const useTasksUtils = () => {
  return {
    filterTasks,
  }
}

export default useTasksUtils
