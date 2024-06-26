'use client'

import Typography from '@/common/components/base/Typography'
import Avatar from '@/common/components/chat-chat/avatar/medium'
import requireRegister from '@/common/stores/user/hooks/requireRegister'
import userStore from '@/common/stores/user/user-store'

import WorldChatRoom from './WorldChatRoom'

const Navbar = () => {
  requireRegister()

  const user = userStore((state) => state.user)

  return (
    <div className="flex flex-row w-full h-[80px] items-center p-6 bg-primary sticky top-0 z-[100] shadow-md">
      <Avatar avatarUrl={user.userAvatar} />

      <div className="flex flex-row gap-2">
        <Typography variant="h4" className="ml-4 text-white">
          {user.username}
        </Typography>
      </div>

      <div className="flex ml-auto">
        <WorldChatRoom />
      </div>
    </div>
  )
}

export default Navbar
