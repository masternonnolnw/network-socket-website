import Typography from '@/common/components/base/Typography'
import SmallAvatar from '@/common/components/chat-chat/avatar/small'
import { Message } from '@/common/interface/room-chat'
import { User } from '@/common/interface/user'
import { cn } from '@/common/utils/tailwind'

interface MessageBlockProps {
  message: Message
  currentReader: User
  nextMessage?: Message
}

const MessageBlock = (props: MessageBlockProps) => {
  const { message, currentReader, nextMessage } = props

  const isMyMessage = message.sender.id === currentReader.id

  const showDetail = nextMessage?.sender.id != message.sender.id

  return (
    <div className={`flex gap-2 ${isMyMessage ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-2 items-end max-w-[60%] relative ${isMyMessage ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={showDetail ? '' : 'invisible'}>
          <SmallAvatar avatarUrl={message.sender.userAvatar} />
        </div>
        <Typography
          variant="body2"
          className={cn(
            'p-2 rounded-lg max-w-full break-all',
            isMyMessage ? 'bg-green-200 rounded-br-none' : 'bg-gray-200 rounded-bl-none',
          )}
        >
          {message.content}
        </Typography>
        {/* date dispaly when showDetail */}
        <Typography
          variant="body3"
          className={cn(
            'text-gray-500 whitespace-nowrap !text-[12px] absolute',
            showDetail ? 'block' : 'hidden',
            isMyMessage ? 'right-[calc(100%+4px)] bottom-0' : 'left-[calc(100%+4px)] bottom-0',
          )}
        >
          {new Date(message.timestamp).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Typography>
      </div>
    </div>
  )
}

export default MessageBlock
