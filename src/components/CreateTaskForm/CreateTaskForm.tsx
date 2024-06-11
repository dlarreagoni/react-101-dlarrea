import { FC, useId } from 'react'
import { TaskWithoutId } from '../../types'

interface CreateTaskFormProps {
  onTaskCreated: (task: TaskWithoutId) => void
}

const CreateTaskForm: FC<CreateTaskFormProps> = ({ onTaskCreated }) => {
  const id = useId()

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const titleInput = event.currentTarget[0] as HTMLInputElement
    const descriptionInput = event.currentTarget[1] as HTMLInputElement

    const task: TaskWithoutId = {
      title: titleInput.value,
      description: descriptionInput.value,
      completed: false,
    }
    onTaskCreated(task)
  }

  return (
    <form onSubmit={handleForm}>
      <div>
        <label id={`${id}-title`} htmlFor="title">
          Title:
        </label>
        <input type="text" id="title" name="title" />
      </div>
      <div>
        <label id={`${id}-Description`} htmlFor="description">
          Description:
        </label>
        <input type="text" id="description" name="description" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default CreateTaskForm
