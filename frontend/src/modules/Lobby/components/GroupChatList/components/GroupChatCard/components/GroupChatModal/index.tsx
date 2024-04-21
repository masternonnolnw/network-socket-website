import Image from 'next/image'
import { useState } from 'react'

import Button from '@/common/components/base/Button'
import Input from '@/common/components/base/Input'
import { Dialog, DialogContent, DialogTrigger } from '@/common/components/base/Modal/Dialog'
import Typography from '@/common/components/base/Typography'
import SmallAvatar from '@/common/components/chat-chat/avatar/small'
import { Message, Room } from '@/common/interface/room-chat'
import userStore from '@/common/stores/user/user-store'
import MessageBlock from '@/modules/Lobby/components/shares/MessageBlock'
import { chatSocket } from '@/socket/chat'

interface GroupChatModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  room: Room
}

const GroupChatModal = (props: GroupChatModalProps) => {
  const user = userStore((state) => state.user)

  const { isOpen, setIsOpen, room } = props

  const messages: Message[] = room ? room.messages : []

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

  const deleteGroup = () => {
    chatSocket.emit('delete-group-room', {
      roomId: room.id,
    })
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(isOpen) => {
        setIsOpen(isOpen)
      }}
    >
      <DialogContent className="min-w-[90%] lg:min-w-[800px] w-fit max-w-[90%] h-[90%] flex flex-col gap-2 z-[200]">
        <Typography variant="h4" className="font-semibold flex flex-row gap-4 items-center">
          {room.name}
          <div className="flex flex-row w-full">
            {room.members.map((user) => (
              <div className="flex ml-[-10px] first:ml-0">
                <SmallAvatar key={user.id} avatarUrl={user.userAvatar} />
              </div>
            ))}
            <Dialog>
              <DialogTrigger className="ml-auto flex mr-8">
                <Button className="flex ml-auto bg-system-error hover:bg-system-error-medium">Delete</Button>
              </DialogTrigger>
              <DialogContent className="z-[200]">
                <Typography variant="h4" className="text-center">
                  Are you sure you want to delete this group?
                </Typography>
                <div className="flex flex-row gap-2 justify-center">
                  <Button size="sm" className="flex bg-system-error hover:bg-system-error-medium" onClick={deleteGroup}>
                    Yes
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
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

export default GroupChatModal
