import Image from 'next/image'
import { useEffect, useState } from 'react'

import Button from '@/common/components/base/Button'
import Input from '@/common/components/base/Input'
import { Dialog, DialogContent } from '@/common/components/base/Modal/Dialog'
import Typography from '@/common/components/base/Typography'
import SmallAvatar from '@/common/components/chat-chat/avatar/small'
import { Message, RoomType } from '@/common/interface/room-chat'
import { User } from '@/common/interface/user'
import userStore from '@/common/stores/user/user-store'
import lobbyStore from '@/modules/Lobby/stores/lobby/lobby'
import { chatSocket } from '@/socket/chat'

import MessageBlock from '../../../../shares/MessageBlock'

interface ChatModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  targetUser: User
}

const ChatModal = (props: ChatModalProps) => {
  const user = userStore((state) => state.user)

  const { isOpen, setIsOpen, targetUser } = props

  const rooms = lobbyStore((state) => state.rooms)

  // current room
  const room = rooms.find((room) => {
    if (room.type === RoomType.Direct) {
      return room.members.some((member) => member.id === targetUser.id)
    }
    return false
  })

  // mock messages for testing
  // const messages: Message[] = getMockMessage(user, targetUser)

  const messages: Message[] = room ? room.messages : []

  useEffect(() => {
    if (isOpen && !room) {
      chatSocket.emit('create-room', {
        type: RoomType.Direct,
        members: [user, targetUser],
      })
    }
  }, [isOpen, room])

  const [message, setMessage] = useState('')

  const sendMessage = async (message: string) => {
    if (!message) return
    chatSocket.emit('send-message', {
      roomId: room?.id,
      message,
      sender: user,
    })
    setMessage('')
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="min-w-[90%] lg:min-w-[800px] w-fit max-w-[90%] h-[90%] flex flex-col gap-2 z-[200]">
        <Typography variant="h4" className="font-semibold flex flex-row gap-2 items-center">
          <SmallAvatar avatarUrl={targetUser.userAvatar} />
          {targetUser.username}
        </Typography>
        <div className="flex flex-col gap-2 w-full p-1 flex-1 overflow-auto scrollbar-hide pt-5">
          {messages.map((message, index) => (
            <MessageBlock
              key={message.id}
              message={message}
              currentReader={user}
              nextMessage={index < messages.length - 1 ? messages[index + 1] : undefined}
            />
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            sendMessage(message)
          }}
          className="flex flex-row gap-2"
        >
          <Input placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Button className="p-1 px-2" variant="ghost">
            <Image src="/icon/send.png" alt="send" className="object-contain" width={24} height={24} />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default ChatModal
