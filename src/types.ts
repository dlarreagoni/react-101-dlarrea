export interface Task {
  id: number
  title: string
  description: string
  completed: boolean
}

export type TaskWithoutId = Omit<Task, 'id'>
