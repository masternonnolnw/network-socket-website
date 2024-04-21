import { motion } from 'framer-motion'
import { useRef } from 'react'

import lobbyStore from '../stores/lobby/lobby'
import UserChatCard from './UserChatCard'

const ChatList = () => {
  const rooms = lobbyStore((state) => state.rooms)
  const onlineUsers = lobbyStore((state) => state.onlineUsers)

  const constraintsRef = useRef(null)

  return (
    <motion.div
      ref={constraintsRef}
      className="flex flex-row items-center gap-4 p-4 w-full flex-wrap bg-[#f5f5f5] max-w-[1150px] mx-auto relative"
    >
      {onlineUsers.map((user) => (
        <motion.div
          className="flex-1 p-1"
          drag
          dragConstraints={constraintsRef}
          whileDrag={{
            scale: 1.1,
            zIndex: 3,
          }}
        >
          <UserChatCard key={user.id} user={user} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ChatList
