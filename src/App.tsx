import './App.css'
import Layout from './components/Layout/Layout'
import TaskCard from './components/Layout/TaskCard'
import { Task } from './types'

function App() {
  const todosList: Task[] = [
    { id: 1, title: 'Prueba título 1', description: 'Descripción 1', completed: false },
    { id: 2, title: 'Prueba título 2', description: 'Descripción 2', completed: true },
    { id: 3, title: 'Prueba título 3', description: 'Descripción 3', completed: false },
  ]

  return (
    <Layout>
      {todosList.map((todo) => (
        <TaskCard key={todo.id} task={todo} />
      ))}
      <div>Contenido de la aplicación</div>
    </Layout>
  )
}

export default App
