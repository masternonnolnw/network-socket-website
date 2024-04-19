import { create } from 'zustand'

import { Room } from '@/common/interface/room-chat'
import { User } from '@/common/interface/user'

interface ILobbyStore {
  rooms: Room[]
  onlineUsers: User[]

  setRooms: (rooms: Room[]) => void
  setOnlineUsers: (onlineUsers: User[]) => void

  addOnlineUser: (user: User) => void
  removeOnlineUser: (user: User) => void

  addRoom: (room: Room) => void
  removeRoom: (room: Room) => void
}

const lobbyStore = create<ILobbyStore>((set) => ({
  rooms: [],
  onlineUsers: [],

  setRooms: (rooms) => set({ rooms }),
  setOnlineUsers: (onlineUsers) => set({ onlineUsers }),

  addOnlineUser: (user) => set((state) => ({ onlineUsers: [...state.onlineUsers, user] })),
  removeOnlineUser: (user) => set((state) => ({ onlineUsers: state.onlineUsers.filter((u) => u.id != user.id) })),

  addRoom: (room) => set((state) => ({ rooms: [...state.rooms, room] })),
  removeRoom: (room) => set((state) => ({ rooms: state.rooms.filter((r) => r.id != room.id) })),
}))

export default lobbyStore
