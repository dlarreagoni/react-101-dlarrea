import { Task } from '../types'

const filterTasks = (tasks: Task[], filter: string): Task[] => {
  return filter ? tasks.filter((task) => task.title.includes(filter)) : [...tasks]
}

const useTasksUtils = () => {
  return {
    filterTasks,
  }
}

export default useTasksUtils
