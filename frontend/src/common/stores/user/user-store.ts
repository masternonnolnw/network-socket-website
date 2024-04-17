import { create } from 'zustand'

import { User } from '@/common/interface/user'

interface IUserStore {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  isUserInit: boolean
  isRegister: boolean
  user: User
  initUser: () => void
  login: (username: string, password: string) => Promise<User | null>
}

const userStore = create<IUserStore>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  isUserInit: false,
  isRegister: false,
  user: {} as User,

  initUser: () => {
    if (userStore.getState().isLoading || userStore.getState().isUserInit) return
    if (typeof window === 'undefined') return
    set({ isLoading: true })
    const userInStorage = localStorage.getItem('user')
    const user = userInStorage ? JSON.parse(userInStorage) : undefined
    if (user) {
      set({ isUserInit: true, isRegister: true, user, isLoading: false })
    } else {
      set({ isUserInit: true, isLoading: false })
    }
  },

  login: async (username: string, userAvatar: string) => {
    const userData: User = {
      id: Math.random().toString(36).substring(1, 15),
      username,
      userAvatar,
    } as User

    set({ isRegister: true, user: userData })
    localStorage.setItem('user', JSON.stringify(userData))
    return userData
  },
}))

export default userStore
