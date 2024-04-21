import Image from 'next/image'

import { cn } from '@/common/utils/tailwind'

interface AvatarProps {
  avatarUrl: string
  selected?: boolean
}

const Avatar = ({ avatarUrl, selected }: AvatarProps) => {
  return (
    <div
      className={cn(
        'min-w-[55px] w-[55px] h-[55px] min-h-[55px] rounded-full overflow-hidden',
        selected ? 'outline outline-primary outline-4 outline-offset-[-2px]' : '',
      )}
    >
      <Image src={`/avatars/${avatarUrl}`} width={500} height={500} alt={avatarUrl} />
    </div>
  )
}

export default Avatar
