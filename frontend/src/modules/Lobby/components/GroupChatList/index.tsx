import { motion } from 'framer-motion'
import { useRef } from 'react'

import Typography from '@/common/components/base/Typography'
import { RoomType } from '@/common/interface/room-chat'

import lobbyStore from '../../stores/lobby/lobby'
import CreateGroupButton from './components/CreateGroupButton'
import GroupChatCard from './components/GroupChatCard'

const GroupChatList = () => {
  const rooms = lobbyStore((state) => state.rooms)

  const constraintsRef = useRef(null)

  console.log('rooms', rooms)

  return (
    <div className="flex flex-col gap-2 max-w-[1150px] mx-auto w-full">
      <Typography variant="h4" className="text-high items-center flex flex-row gap-2">
        My Group Chat ({rooms.length})
        <CreateGroupButton />
      </Typography>
      <motion.div
        className="flex flex-row items-center justify-center gap-4 p-4 w-full flex-wrap rounded-xl bg-[#f5f5f5] relative"
        ref={constraintsRef}
      >
        {rooms.length === 0 && (
          <Typography variant="h4" className="text-medium">
            No group chat Join room to start chatting
          </Typography>
        )}
        {rooms
          .filter((room) => room.type === RoomType.Group || room.type === RoomType.World)
          .map((room) => (
            <motion.div
              className="p-1"
              drag
              dragConstraints={constraintsRef}
              whileDrag={{
                scale: 1.1,
                zIndex: 3,
              }}
              key={room.id}
            >
              <GroupChatCard key={room.id} room={room} />
            </motion.div>
          ))}
      </motion.div>
    </div>
  )
}

export default GroupChatList
