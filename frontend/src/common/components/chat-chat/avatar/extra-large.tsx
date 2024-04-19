import Image from 'next/image'

import { cn } from '@/common/utils/tailwind'

interface AvatarProps {
  avatarUrl: string
  selected?: boolean
  onClick?: () => void
}

const ExtraLargeAvatar = ({ avatarUrl, selected, onClick }: AvatarProps) => {
  return (
    <div
      className={cn(
        'min-w-[100px] w-[100px] h-[100px] hover:scale-110 min-h-[100px] duration-100 hover:cursor-pointer rounded-full overflow-hidden',
        selected ? 'outline outline-primary outline-4 outline-offset-[-2px]' : '',
      )}
      onClick={onClick}
    >
      <Image src={`/avatars/${avatarUrl}`} width={500} height={500} alt={avatarUrl} />
    </div>
  )
}

export default ExtraLargeAvatar
