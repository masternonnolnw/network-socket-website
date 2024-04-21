'use client'

import { useEffect } from 'react'

import { Message, Room } from '@/common/interface/room-chat'
import { User } from '@/common/interface/user'
import userStore from '@/common/stores/user/user-store'
import { chatSocket } from '@/socket/chat'

import ChatList from './ChatList'
import lobbyStore from './stores/lobby/lobby'
const LobbyPage = () => {
  const isUserInit = userStore((state) => state.isUserInit)
  const user = userStore((state) => state.user)

  const setRooms = lobbyStore((state) => state.setRooms)
  const setOnlineUsers = lobbyStore((state) => state.setOnlineUsers)
  const addOnlineUser = lobbyStore((state) => state.addOnlineUser)
  const removeOnlineUser = lobbyStore((state) => state.removeOnlineUser)
  const addRoom = lobbyStore((state) => state.addRoom)

  const addMessage = lobbyStore((state) => state.addMessage)

  useEffect(() => {
    if (!isUserInit) return
    if (!user || !user.username) return

    // join lobby
    chatSocket.emit('join-lobby', user)

    chatSocket.on('join-lobby', (data: { onlineUsers: User[]; rooms: Room[] }) => {
      const { onlineUsers, rooms } = data
      console.log('join-lobby', onlineUsers, rooms)
      setOnlineUsers(onlineUsers)
      setRooms(rooms)
    })

    chatSocket.on('new-user', (user: User) => {
      console.log('new-user', user)
      addOnlineUser(user)
    })

    chatSocket.on('leave-user', (user: User) => {
      console.log('leave-user', user)
      removeOnlineUser(user)
    })

    chatSocket.on('connect', () => {
      console.log('connected')
    })

    // create room
    chatSocket.on('create-room', (room: Room) => {
      console.log('create-room', room)
      addRoom(room)
    })

    // new message
    chatSocket.on('new-message', ({ roomId, message }: { roomId: string; message: Message }) => {
      console.log('new-message', roomId, message)
      addMessage({ roomId, message })
    })

    return () => {
      chatSocket.disconnect()
    }
  }, [isUserInit])

  // console.log('rooms', rooms)
  // console.log('onlineUsers', onlineUsers)

  return (
    <div className="flex flex-col w-full h-fit p-6">
      <ChatList />
    </div>
  )
}

export default LobbyPage
