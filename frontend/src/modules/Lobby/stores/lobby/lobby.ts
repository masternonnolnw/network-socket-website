import { create } from 'zustand'

import { Message, Room } from '@/common/interface/room-chat'
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

  addMessage: (newMessage: { roomId: string; message: Message }) => void
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

  addMessage: ({ roomId, message }) => {
    set((state) => {
      const rooms = state.rooms.map((r) => {
        if (r.id === roomId) {
          r.messages.push(message)
        }
        return r
      })
      return { rooms }
    })
    // set((state) => {
    //   const room = state.rooms.find((r) => r.id === roomId)
    //   if (room) {
    //     room.messages.push(message)
    //   }
    // })
  },
}))

export default lobbyStore
