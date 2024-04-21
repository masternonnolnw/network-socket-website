import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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

  const isMyMessage =
    message.sender.id === currentReader.id ||
    (message.sender.username === 'anonymous' && message.id === currentReader.id)

  const showDetail =
    nextMessage?.sender.id != message.sender.id || nextMessage.sender.username != message.sender.username

  const [init, setInit] = useState(false)
  useEffect(() => {
    if (!init) {
      setInit(true)
    }
  }, [init])

  return (
    <div className={`flex gap-2 ${isMyMessage ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-2 items-end max-w-[60%] relative ${isMyMessage ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={showDetail ? '' : 'invisible'}>
          {/* <Tooltip delayDuration={200}>
            <TooltipTrigger disabled={!init}> */}
          <SmallAvatar avatarUrl={message.sender.userAvatar} />
          {/* </TooltipTrigger>
            <TooltipContent className="w-fit border-none bg-white">
              <Typography variant="body2">{message.sender.username}</Typography>
            </TooltipContent>
          </Tooltip> */}
        </div>
        <Typography
          variant="body2"
          className={cn(
            'p-2 rounded-lg max-w-full break-all flex flex-row gap-2',
            isMyMessage ? 'bg-green-200 rounded-br-none' : 'bg-gray-200 rounded-bl-none',
          )}
        >
          {message.content === 'duck' && (
            <motion.div
              drag
              whileTap={{ scale: 10, zIndex: 10000 }}
              dragConstraints={{
                left: -100000000,
                right: 100000000,
                top: -100000000,
                bottom: 100000000,
              }}
              className="w-[20px] h-[20px] relative pointer-events-auto"
            >
              <Image
                src="/icon/rubber-duck.png"
                className="object-contain pointer-events-none"
                width={500}
                height={500}
                alt="rubber-duck"
              />
            </motion.div>
          )}
          {message.content}
        </Typography>
        {/* date dispaly when showDetail */}
        <Typography
          variant="body3"
          className={cn(
            'text-gray-500 whitespace-nowrap !text-[12px] absolute block',
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
