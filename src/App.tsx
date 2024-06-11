import { useReducer, useState } from 'react'
import './App.css'
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm'
import Layout from './components/Layout/Layout'
import SearchBar from './components/Search/SearchBar'
import TasksLists from './components/TaskCard/TaskList'
import { Task, TaskWithoutId } from './types'

enum TaskAction {
  Create,
  Update,
}

interface TaskReducerAction {
  action: TaskAction
  task: Task | TaskWithoutId
}

function App() {
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
      default:
        return state
    }
  }

  const [searchText, setSearchText] = useState<string>('')
  const [tasks, dispatch] = useReducer(taskReducer, todosList)

  const handleTaskCreated = (task: TaskWithoutId) => {
    dispatch({ action: TaskAction.Create, task })
  }

  const handleTaskUpdated = (task: Task) => {
    dispatch({ action: TaskAction.Update, task })
  }

  return (
    <Layout>
      <SearchBar onSearch={(searchText: string) => setSearchText(searchText)} />
      <br />
      <TasksLists tasks={tasks} filter={searchText} onTaskChanged={handleTaskUpdated} />
      <br />
      <CreateTaskForm onTaskCreated={handleTaskCreated} />
    </Layout>
  )
}

export default App
