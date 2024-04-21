import Typography from '@/common/components/base/Typography'
import { Room } from '@/common/interface/room-chat'
import userStore from '@/common/stores/user/user-store'
import lobbyStore from '@/modules/Lobby/stores/lobby/lobby'
import { chatSocket } from '@/socket/chat'

import UserChatCard from '../../../DirectChatList/UserChatCard'

interface RoomChatCardProps {
  room: Room
}

const JoinGroupChatCard = ({ room }: RoomChatCardProps) => {
  const user = userStore((state) => state.user)

  const removeOtherRoom = lobbyStore((state) => state.removeOtherRoom)

  const joinGroupChat = () => {
    removeOtherRoom(room)
    chatSocket.emit('join-room', {
      roomId: room.id,
      user,
    })
  }
  return (
    <div className="flex flex-col items-center gap-2 p-4 w-fit flex-wrap bg-gray-200 relative rounded-xl hover:scale-110 hover:cursor-pointer duration-100 text-center">
      <div
        className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-50 z-[20] bg-black duration-200 rounded-xl"
        onClick={joinGroupChat}
      >
        <Typography
          variant="h3"
          className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          Join
        </Typography>
      </div>
      <Typography variant="h4">{room.name}</Typography>
      <div className="flex flex-row items-center relative">
        {room.members.map((user) => (
          <UserChatCard key={user.id} user={user} disabled />
        ))}
      </div>
    </div>
  )
}

export default JoinGroupChatCard
