import Image from 'next/image'

import { cn } from '@/common/utils/tailwind'

interface AvatarProps {
  avatarUrl: string
  selected?: boolean
}

const SmallAvatar = ({ avatarUrl, selected }: AvatarProps) => {
  return (
    <div
      className={cn(
        'min-w-[40px] w-[40px] h-[40px] min-h-[40px] rounded-full overflow-hidden',
        selected ? 'outline outline-secondary outline-4 outline-offset-[-2px]' : '',
      )}
    >
      <Image src={`/avatars/${avatarUrl}`} width={500} height={500} alt={avatarUrl} />
    </div>
  )
}

export default SmallAvatar
