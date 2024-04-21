import { useState } from 'react'

import Button from '@/common/components/base/Button'
import Input from '@/common/components/base/Input'
import { Dialog, DialogContent } from '@/common/components/base/Modal/Dialog'
import Typography from '@/common/components/base/Typography'
import userStore from '@/common/stores/user/user-store'
import { chatSocket } from '@/socket/chat'

const CreateGroupButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [groupName, setGroupName] = useState('')

  const user = userStore((state) => state.user)

  const createGroup = (groupName: string) => {
    if (!groupName) return
    chatSocket.emit('create-group-room', {
      name: groupName,
      members: [user],
    })
    setGroupName('')
    setIsOpen(false)
  }

  return (
    <>
      <Button size="sm" className="text-[30px] p-2 rounded-full" onClick={() => setIsOpen(true)}>
        +
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="flex flex-col gap-2 z-[200]">
          <Typography variant="h4" className="font-semibold text-center w-full">
            Create Chat Room
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              createGroup(groupName)
            }}
            className="flex flex-col gap-2"
          >
            <Input placeholder="Group Name" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
            <Button className="p-1 px-2 max-w-[100px] w-full mx-auto" disabled={!groupName || groupName.length < 1}>
              Create
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default CreateGroupButton
