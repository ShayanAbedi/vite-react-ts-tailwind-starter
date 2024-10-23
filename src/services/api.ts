import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export type User = {
  id: number
  name: string
  email: string
}

export const userService = {
  getUsers: async () => {
    const { data } = await api.get<User[]>('/users')
    return data
  },

  getUser: async (id: number) => {
    const { data } = await api.get<User>(`/users/${id}`)
    return data
  },
}
