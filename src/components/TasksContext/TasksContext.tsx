import { FC, PropsWithChildren, createContext, useReducer } from 'react'
import { Task, TaskWithoutId } from '../../types'

interface TaskContextType {
  tasks: Task[]
  addTask: (task: TaskWithoutId) => void
  updateTask: (task: Task) => void
  deleteTask: (task: Task) => void
}

export const TasksContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
})

enum TaskAction {
  Create,
  Update,
  Delete,
}

interface TaskReducerAction {
  action: TaskAction
  task: Task | TaskWithoutId
}

const todosList: Task[] = [
  { id: 1, title: 'Prueba título 1', description: 'Descripción 1', completed: false },
  { id: 2, title: 'Prueba título 2', description: 'Descripción 2', completed: true },
  { id: 3, title: 'Prueba título 3', description: 'Descripción 3', completed: false },
]
const taskReducer = (state: Task[], action: TaskReducerAction): Task[] => {
  switch (action.action) {
    case TaskAction.Create:
      if ('id' in action.task) {
        const newTask = action.task as Task
        return [...state, newTask]
      } else {
        const newTask = action.task as TaskWithoutId
        const nextId = state.length > 0 ? state[state.length - 1].id + 1 : 1
        const taskWithId = { ...newTask, id: nextId }
        return [...state, taskWithId]
      }
    case TaskAction.Update:
      return state.map((t) => ('id' in action.task && t.id === action.task.id ? action.task : t))
    case TaskAction.Delete:
      return state.filter((t) => 'id' in action.task && t.id !== action.task.id)
    default:
      return state
  }
}
const TaskContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, todosList)
  const addTask = (task: TaskWithoutId) => dispatch({ action: TaskAction.Create, task })
  const updateTask = (task: Task) => dispatch({ action: TaskAction.Update, task })
  const deleteTask = (task: Task) => dispatch({ action: TaskAction.Delete, task })

  return <TasksContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>{children}</TasksContext.Provider>
}

export default TaskContextProvider
