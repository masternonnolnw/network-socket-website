import { Content as DialogContentBase, Portal as DialogPortal } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

import DialogOverlay from './components/DialogOverlay'

const DialogContent = forwardRef<
  ElementRef<typeof DialogContentBase>,
  ComponentPropsWithoutRef<typeof DialogContentBase>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogContentBase
      ref={ref}
      className={cn(
        'fixed z-50 grid w-[calc(100%-40px)] max-w-lg border border-solid bg-white p-6 max-md:p-4 gap-4 rounded-md',
        'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] duration-200',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
        className,
      )}
      {...props}
    >
      {children}
    </DialogContentBase>
  </DialogPortal>
))
DialogContent.displayName = DialogContentBase.displayName

export default DialogContent
