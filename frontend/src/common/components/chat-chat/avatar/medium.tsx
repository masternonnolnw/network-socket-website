import Image from 'next/image'

interface AvatarProps {
  avatarUrl: string
}

const Avatar = ({ avatarUrl }: AvatarProps) => {
  return (
    <div className="min-w-[55px] w-[55px] h-[55px] min-h-[55px] rounded-full overflow-hidden">
      <Image src={`/avatars/${avatarUrl}`} width={500} height={500} alt={avatarUrl} />
    </div>
  )
}

export default Avatar
