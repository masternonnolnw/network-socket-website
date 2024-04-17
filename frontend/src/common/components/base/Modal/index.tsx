import { Root as Dialog } from '@radix-ui/react-dialog'

import DialogContent from './components/DialogContent'
import { ModalProps } from './types'

const Modal = (props: ModalProps) => {
  const { children, contentClassName, ...modalProps } = props
  return (
    <Dialog {...modalProps}>
      <DialogContent className={contentClassName}>{children}</DialogContent>
    </Dialog>
  )
}

export default Modal
