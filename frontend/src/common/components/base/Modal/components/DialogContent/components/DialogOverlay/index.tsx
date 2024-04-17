import { Overlay as DialogOverlayBase } from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

const DialogOverlay = forwardRef<
  ElementRef<typeof DialogOverlayBase>,
  ComponentPropsWithoutRef<typeof DialogOverlayBase>
>(({ className, ...props }, ref) => (
  <DialogOverlayBase
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-neutral-950 opacity-60',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
      className,
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogOverlayBase.displayName

export default DialogOverlay
