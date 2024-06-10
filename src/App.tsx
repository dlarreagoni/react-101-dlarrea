import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import SearchBar from './components/Search/Search'
import TaskCard from './components/TaskCard/TaskCard'
import { Task } from './types'

function App() {
  const todosList: Task[] = [
    { id: 1, title: 'Prueba título 1', description: 'Descripción 1', completed: false },
    { id: 2, title: 'Prueba título 2', description: 'Descripción 2', completed: true },
    { id: 3, title: 'Prueba título 3', description: 'Descripción 3', completed: false },
  ]

  const [searchText, setSearchText] = useState('')

  const filteredTodos = todosList.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchText.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchText.toLowerCase()),
  )

  return (
    <Layout>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <br />
      <br />
      {filteredTodos.map((todo) => (
        <TaskCard key={todo.id} task={todo} />
      ))}
      <div>Contenido de la aplicación</div>
    </Layout>
  )
}

export default App
