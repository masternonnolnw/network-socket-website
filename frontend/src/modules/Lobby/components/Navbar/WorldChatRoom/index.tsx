import Image from 'next/image'
import { useState } from 'react'

import Button from '@/common/components/base/Button'
import lobbyStore from '@/modules/Lobby/stores/lobby/lobby'

import WorldChatModal from './components/WorldChatModal'

const WorldChatRoom = () => {
  const worldRoom = lobbyStore((state) => state.worldRoom)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <Image src="/icon/earth.png" alt="earth" width={30} height={30} />
      </Button>
      {worldRoom && <WorldChatModal room={worldRoom} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  )
}

export default WorldChatRoom
