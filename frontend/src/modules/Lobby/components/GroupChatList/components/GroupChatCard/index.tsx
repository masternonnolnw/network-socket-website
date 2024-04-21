import { useState } from 'react'

import Typography from '@/common/components/base/Typography'
import { Room } from '@/common/interface/room-chat'

import UserChatCard from '../../../DirectChatList/UserChatCard'
import GroupChatModal from './components/GroupChatModal'

interface RoomChatCardProps {
  room: Room
}

const GroupChatCard = ({ room }: RoomChatCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col items-center gap-2 p-4 w-fit flex-wrap bg-gray-200 relative rounded-xl hover:scale-110 hover:cursor-pointer duration-100">
      <div className="absolute w-full h-full top-0 left-0 opacity-0 z-[1]" onClick={() => setIsOpen(true)} />
      <Typography variant="h4">{room.name}</Typography>
      <div className="flex flex-row items-center relative">
        {room.members.map((user) => (
          <UserChatCard key={user.id} user={user} onClickMyself={() => setIsOpen(true)} />
        ))}
      </div>
      <GroupChatModal room={room} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default GroupChatCard
