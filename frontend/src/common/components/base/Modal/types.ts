import { Root as Dialog } from '@radix-ui/react-dialog'
import { ComponentPropsWithRef } from 'react'
import { ReactNode } from 'react'

export interface ModalProps extends ComponentPropsWithRef<typeof Dialog> {
  children: ReactNode
  contentClassName?: string
}
