import './App.css'
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm'
import Layout from './components/Layout/Layout'
import SearchBar from './components/Search/SearchBar'
import TasksLists from './components/TaskCard/TaskList'
import { SearchBarContextProvider } from './components/TasksContext/SearchBarContext'

function App() {
  return (
    <Layout>
      <SearchBarContextProvider>
        <>
          <SearchBar />
          <TasksLists />
        </>
      </SearchBarContextProvider>
      <br />
      <CreateTaskForm />
    </Layout>
  )
}

export default App
