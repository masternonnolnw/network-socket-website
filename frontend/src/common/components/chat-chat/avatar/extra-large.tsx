import Image from 'next/image'

import { cn } from '@/common/utils/tailwind'

interface AvatarProps {
  avatarUrl: string
  selected?: boolean
  onClick?: () => void
  isMyself?: boolean
  disabled?: boolean
}

const ExtraLargeAvatar = ({ avatarUrl, selected, onClick, isMyself = false, disabled = false }: AvatarProps) => {
  return (
    <div
      className={cn(
        'min-w-[100px] w-[100px] h-[100px] min-h-[100px] duration-100 hover:cursor-pointer rounded-full overflow-hidden z-[10]',
        selected || isMyself ? 'outline outline-primary outline-4 outline-offset-[-2px]' : '',
        isMyself || disabled ? '' : 'hover:scale-110',
      )}
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick()
      }}
    >
      <Image src={`/avatars/${avatarUrl}`} width={500} height={500} alt={avatarUrl} />
    </div>
  )
}

export default ExtraLargeAvatar
