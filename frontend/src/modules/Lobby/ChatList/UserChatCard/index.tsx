import Typography from '@/common/components/base/Typography'
import ExtraLargeAvatar from '@/common/components/chat-chat/avatar/extra-large'
import { User } from '@/common/interface/user'

interface UserChatCardProps {
  user: User
}

const UserChatCard = ({ user }: UserChatCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-200 rounded-md p-4">
      <ExtraLargeAvatar avatarUrl={user.userAvatar} />
      <Typography variant="h6">{user.username}</Typography>
    </div>
  )
}

export default UserChatCard
