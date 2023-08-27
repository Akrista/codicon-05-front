import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  name: string
  email: string
  token: string
}

export interface UserStore {
  user: User | null
  setUser: (userData: Partial<User> | null) => void
}

const useUser = create<UserStore>()(
  persist(
    (set) => ({
      user: null,

      setUser: (userData) => {
        set((state) => ({
          ...state,

          user: {
            name: userData?.name || '',
            email: userData?.email || '',
            token: userData?.token || '',
          },
        }))
      },
    }),
    {
      name: 'user-storage',
    },
  ),
)

export default useUser
