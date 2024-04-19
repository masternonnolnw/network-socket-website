'use client'

import { useEffect } from 'react'

import { Room } from '@/common/interface/room-chat'
import { User } from '@/common/interface/user'
import userStore from '@/common/stores/user/user-store'
import { chatSocket } from '@/socket/chat'

import ChatList from './ChatList'
import lobbyStore from './stores/lobby/lobby'
const LobbyPage = () => {
  const isUserInit = userStore((state) => state.isUserInit)
  const user = userStore((state) => state.user)

  const rooms = lobbyStore((state) => state.rooms)
  const onlineUsers = lobbyStore((state) => state.onlineUsers)
  const setRooms = lobbyStore((state) => state.setRooms)
  const setOnlineUsers = lobbyStore((state) => state.setOnlineUsers)
  const addOnlineUser = lobbyStore((state) => state.addOnlineUser)
  const removeOnlineUser = lobbyStore((state) => state.removeOnlineUser)

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
      console.log('new-user', onlineUsers)
      addOnlineUser(user)
    })

    chatSocket.on('leave-user', (user: User) => {
      console.log('leave-user', user)
      removeOnlineUser(user)
    })

    chatSocket.on('connect', () => {
      console.log('connected')
    })

    return () => {
      chatSocket.disconnect()
    }
  }, [isUserInit])

  console.log('rooms', rooms)
  console.log('onlineUsers', onlineUsers)

  return (
    <div className="flex flex-col w-full h-fit px-[190px] py-[50px]">
      <ChatList />
    </div>
  )
}

export default LobbyPage
