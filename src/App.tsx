import './App.css'
import Layout from './components/Layout/Layout'
import TaskCard from './components/Layout/TaskCard'
import { Task } from './types'

function App() {
  const todo: Task = {
    id: 1,
    title: 'Prueba titulo task',
    description: 'descripcion',
    completed: false
  }

  return (
    <Layout>
      <TaskCard task={todo} />
      <div>Contenido de la aplicación</div>
    </Layout>
  )
}


export default App