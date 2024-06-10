import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import SearchBar from './components/Search/SearchBar'
import TasksLists from './components/TaskCard/TaskList'
import { Task } from './types'

function App() {
  const todosList: Task[] = [
    { id: 1, title: 'Prueba título 1', description: 'Descripción 1', completed: false },
    { id: 2, title: 'Prueba título 2', description: 'Descripción 2', completed: true },
    { id: 3, title: 'Prueba título 3', description: 'Descripción 3', completed: false },
  ]

  const [searchText, setSearchText] = useState<string>('')

  return (
    <Layout>
      <SearchBar onSearch={(searchText: string) => setSearchText(searchText)} />
      <br />
      <TasksLists tasks={todosList} filter={searchText} />
    </Layout>
  )
}

export default App
