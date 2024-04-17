import Image from 'next/image'

import { cn } from '@/common/utils/tailwind'

interface AvatarProps {
  avatarUrl: string
  selected?: boolean
  onClick?: () => void
}

const LargeAvatar = ({ avatarUrl, selected, onClick }: AvatarProps) => {
  return (
    <div
      className={cn(
        'min-w-[80px] hover:min-w-[100px] w-[80px] h-[80px] min-h-[80px] hover:min-h-[100px] duration-100 hover:cursor-pointer rounded-full overflow-hidden',
        selected ? 'outline outline-primary outline-4 outline-offset-[-2px]' : '',
      )}
      onClick={onClick}
    >
      <Image src={`/avatars/${avatarUrl}`} width={500} height={500} alt={avatarUrl} />
    </div>
  )
}

export default LargeAvatar
