import { User } from './user'

export enum RoomType {
  Group = 'group',
  Direct = 'direct',
  World = 'world',
}

export interface Room {
  type: RoomType
  id: string
  name: string
  members: User[]
  messages: Message[]
}
export interface Message {
  id: string
  sender: User
  content: string
  timestamp: number
}
