import { useState } from 'react'

import Typography from '@/common/components/base/Typography'
import ExtraLargeAvatar from '@/common/components/chat-chat/avatar/extra-large'
import { User } from '@/common/interface/user'
import userStore from '@/common/stores/user/user-store'
import { cn } from '@/common/utils/tailwind'

import ChatModal from './components/ChatModal'

interface UserChatCardProps {
  user: User
  onClickMyself?: () => void
  disabled?: boolean
}

const UserChatCard = ({ user, onClickMyself, disabled = false }: UserChatCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const currentUser = userStore((state) => state.user)

  const isMyself = currentUser.id === user.id

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-200 rounded-md p-4 group">
      <ExtraLargeAvatar
        avatarUrl={user.userAvatar}
        onClick={() => {
          if (disabled) return
          if (!isMyself) setIsOpen(true)
          else onClickMyself && onClickMyself()
        }}
        isMyself={isMyself}
        disabled={disabled}
      />

      <Typography variant="h6" className={cn(isMyself ? 'font-bold' : '')}>
        {isMyself ? 'You' : user.username}
      </Typography>
      <ChatModal isOpen={isOpen} setIsOpen={setIsOpen} targetUser={user} />
    </div>
  )
}

export default UserChatCard
