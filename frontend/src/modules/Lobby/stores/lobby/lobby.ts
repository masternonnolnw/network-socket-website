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

  otherRooms: Room[]
  setOtherRooms: (rooms: Room[]) => void
  removeOtherRoom: (room: Room) => void
  addOtherRoom: (room: Room) => void

  joinRoom: (roomId: string, user: User) => void

  worldRoom: Room | null
  setWorldRoom: (room: Room) => void
  addWorldMessage: (message: Message) => void

  removeRoomById: (roomId: string) => void
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
  },

  otherRooms: [],
  setOtherRooms: (rooms) => set({ otherRooms: rooms }),
  removeOtherRoom: (room) => set((state) => ({ otherRooms: state.otherRooms.filter((r) => r.id != room.id) })),
  joinRoom: (roomId, user) => {
    // join room
    set((state) => {
      const rooms = state.rooms.map((r) => {
        if (r.id === roomId) {
          r.members.push(user)
        }
        return r
      })
      return { rooms: [...rooms] }
    })
  },
  addOtherRoom: (room) => set((state) => ({ otherRooms: [...state.otherRooms, room] })),
  worldRoom: null,
  setWorldRoom: (room) => set({ worldRoom: room }),
  addWorldMessage: (message) =>
    set((state) => ({
      worldRoom: {
        ...state.worldRoom!,
        messages: [...state.worldRoom!.messages, message],
      },
    })),
  removeRoomById: (roomId) => {
    // remove from rooms and otherRooms
    set((state) => {
      const rooms = state.rooms.filter((r) => r.id != roomId)
      const otherRooms = state.otherRooms.filter((r) => r.id != roomId)
      return { rooms, otherRooms }
    })
  },
}))

export default lobbyStore
