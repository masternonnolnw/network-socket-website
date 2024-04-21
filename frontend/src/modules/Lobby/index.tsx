'use client'

import { useEffect } from 'react'

import { TooltipProvider } from '@/common/components/base/Tooltip'
import { Message, Room } from '@/common/interface/room-chat'
import { User } from '@/common/interface/user'
import userStore from '@/common/stores/user/user-store'
import { chatSocket } from '@/socket/chat'

import DirectChatList from './components/DirectChatList'
import GroupChatList from './components/GroupChatList'
import Navbar from './components/Navbar'
import OtherGroupChatList from './components/OtherGroupChatList '
import lobbyStore from './stores/lobby/lobby'
const LobbyPage = () => {
  const isUserInit = userStore((state) => state.isUserInit)
  const user = userStore((state) => state.user)

  const setRooms = lobbyStore((state) => state.setRooms)
  const setOnlineUsers = lobbyStore((state) => state.setOnlineUsers)
  const addOnlineUser = lobbyStore((state) => state.addOnlineUser)
  const removeOnlineUser = lobbyStore((state) => state.removeOnlineUser)
  const addRoom = lobbyStore((state) => state.addRoom)
  const setOtherRooms = lobbyStore((state) => state.setOtherRooms)
  const joinRoom = lobbyStore((state) => state.joinRoom)
  const addOtherRoom = lobbyStore((state) => state.addOtherRoom)

  const addMessage = lobbyStore((state) => state.addMessage)

  const setWorldRoom = lobbyStore((state) => state.setWorldRoom)
  const addWorldMessage = lobbyStore((state) => state.addWorldMessage)

  useEffect(() => {
    if (!isUserInit) return
    if (!user || !user.username) return

    // join lobby
    chatSocket.emit('join-lobby', user)

    chatSocket.on('join-lobby', (data: { onlineUsers: User[]; rooms: Room[]; otherRooms: Room[]; worldRoom: Room }) => {
      const { onlineUsers, rooms, otherRooms } = data
      console.log('join-lobby', onlineUsers, rooms)
      setOnlineUsers(onlineUsers)
      setRooms(rooms)
      setOtherRooms(otherRooms)
      setWorldRoom(data.worldRoom)
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

    // join room
    chatSocket.on('join-room', ({ roomId, user }: { roomId: string; user: User }) => {
      console.log('join-room', roomId, user)
      joinRoom(roomId, user)
    })

    // new room
    chatSocket.on('new-room', ({ room }: { room: Room }) => {
      console.log('new-room', room)
      addRoom(room)
    })

    // add other room
    chatSocket.on('add-other-room', ({ room }: { room: Room }) => {
      console.log('add-other-room', room)
      addOtherRoom(room)
    })

    // new world message
    chatSocket.on('new-world-message', (message: Message) => {
      console.log('new-world-message', message)
      addWorldMessage(message)
    })

    return () => {
      chatSocket.disconnect()
    }
  }, [isUserInit])

  // console.log('rooms', rooms)
  // console.log('onlineUsers', onlineUsers)

  return (
    <TooltipProvider>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-col gap-6 w-full h-fit p-6 relative">
          <DirectChatList />
          <GroupChatList />
          <OtherGroupChatList />
        </div>
      </div>
    </TooltipProvider>
  )
}

export default LobbyPage
