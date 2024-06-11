import { useState } from 'react'
import './App.css'
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm'
import Layout from './components/Layout/Layout'
import SearchBar from './components/Search/SearchBar'
import TasksLists from './components/TaskCard/TaskList'
import { Task, TaskWithoutId } from './types'

function App() {
  const todosList: Task[] = [
    { id: 1, title: 'Prueba título 1', description: 'Descripción 1', completed: false },
    { id: 2, title: 'Prueba título 2', description: 'Descripción 2', completed: true },
    { id: 3, title: 'Prueba título 3', description: 'Descripción 3', completed: false },
  ]

  const [searchText, setSearchText] = useState<string>('')
  const [tasks, setTasks] = useState(todosList)

  const handleTaskCreated = (task: TaskWithoutId) => {
    const newTask: Task = {
      id: tasks.length + 1,
      ...task,
    }
    setTasks([...tasks, newTask])
  }

  const handleTaskChanged = (task: Task) => {
    const newTasks = tasks.map((t) => (t.id === task.id ? task : t))
    setTasks(newTasks)
  }

  return (
    <Layout>
      <SearchBar onSearch={(searchText: string) => setSearchText(searchText)} />
      <br />
      <TasksLists tasks={tasks} filter={searchText} onTaskChanged={handleTaskChanged} />
      <CreateTaskForm onTaskCreated={handleTaskCreated} />
    </Layout>
  )
}

export default App
