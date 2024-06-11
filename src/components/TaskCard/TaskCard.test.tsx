import { render } from '@testing-library/react'
import CreateTaskForm from '../CreateTaskForm/CreateTaskForm'
import TaskCard from './TaskCard'

describe('TaskCard', () => {
  it('Renderiza el componente TaskCard', () => {
    render(<TaskCard task={{ id: 1, title: 'Task 1', description: '', completed: false }} />)
  })

  it('Renderiza el título de la tarea', () => {
    const { getByText } = render(<TaskCard task={{ id: 1, title: 'Task 1', description: '', completed: false }} />)
    expect(getByText('Task 1')).toBeInTheDocument()
  })

  it('Renderiza la descripción de la tarea', () => {
    const { getByText } = render(
      <TaskCard task={{ id: 1, title: 'Task 1', description: 'Description', completed: false }} />,
    )
    expect(getByText('Description')).toBeInTheDocument()
  })

  it('Renderiza el checkbox de completar tarea', () => {
    const { getByRole } = render(<TaskCard task={{ id: 1, title: 'Task 1', description: '', completed: true }} />)
    const checkbox = getByRole('checkbox') as HTMLInputElement
    expect(checkbox).toBeInTheDocument()
    expect(checkbox.checked).toBe(true)
  })
})

describe('CreateTaskForm', () => {
  it('Renderiza el componente CreateTaskForm', () => {
    render(<CreateTaskForm />)
  })

  it('Renderiza el titulo', () => {
    const { getByLabelText } = render(<CreateTaskForm />)
    expect(getByLabelText('Title:')).toBeInTheDocument()
  })

  it('Renderiza el textarea de descripción', () => {
    const { getByLabelText } = render(<CreateTaskForm />)
    expect(getByLabelText('Description:')).toBeInTheDocument()
  })

  it('Renderiza el botón de crear tarea', () => {
    const { getByRole } = render(<CreateTaskForm />)
    expect(getByRole('button')).toBeInTheDocument()
  })
})
