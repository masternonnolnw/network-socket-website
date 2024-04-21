import { motion } from 'framer-motion'
import { useRef } from 'react'

import Typography from '@/common/components/base/Typography'

import lobbyStore from '../../stores/lobby/lobby'
import UserChatCard from './UserChatCard'

const DirectChatList = () => {
  const onlineUsers = lobbyStore((state) => state.onlineUsers)

  const constraintsRef = useRef(null)

  return (
    <div className="flex flex-col gap-2 max-w-[1150px] mx-auto w-full">
      <Typography variant="h4" className="text-high">
        Online User ({onlineUsers.length})
      </Typography>
      <motion.div
        ref={constraintsRef}
        className="flex flex-row items-center justify-center gap-4 p-4 w-full flex-wrap rounded-xl bg-[#f5f5f5] relative"
      >
        {onlineUsers.length === 0 && (
          <Typography variant="h4" className="text-medium">
            Nobody here
          </Typography>
        )}
        {onlineUsers.map((user) => (
          <motion.div
            className="flex-1 p-1"
            drag
            dragConstraints={constraintsRef}
            whileDrag={{
              scale: 1.1,
              zIndex: 3,
            }}
            key={user.id}
          >
            <UserChatCard key={user.id} user={user} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default DirectChatList
