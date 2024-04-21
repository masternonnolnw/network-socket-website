import Image from 'next/image'

interface AvatarProps {
  avatarUrl: string
}

const SmallAvatar = ({ avatarUrl }: AvatarProps) => {
  return (
    <div className="min-w-[40px] w-[40px] h-[40px] min-h-[40px] rounded-full overflow-hidden">
      <Image src={`/avatars/${avatarUrl}`} width={500} height={500} alt={avatarUrl} />
    </div>
  )
}

export default SmallAvatar
