import { useState } from 'react'

import Typography from '@/common/components/base/Typography'
import ExtraLargeAvatar from '@/common/components/chat-chat/avatar/extra-large'
import { User } from '@/common/interface/user'

import ChatModal from './components/ChatModal'

interface UserChatCardProps {
  user: User
}

const UserChatCard = ({ user }: UserChatCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-200 rounded-md p-4">
      <ExtraLargeAvatar avatarUrl={user.userAvatar} onClick={() => setIsOpen(true)} />
      <Typography variant="h6">{user.username}</Typography>
      <ChatModal isOpen={isOpen} setIsOpen={setIsOpen} targetUser={user} />
    </div>
  )
}

export default UserChatCard
