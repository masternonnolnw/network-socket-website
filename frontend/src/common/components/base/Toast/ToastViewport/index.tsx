import { Viewport as ToastViewportBase } from '@radix-ui/react-toast'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

const ToastViewport = forwardRef<
  ElementRef<typeof ToastViewportBase>,
  ComponentPropsWithoutRef<typeof ToastViewportBase>
>(({ className, ...props }, ref) => (
  <ToastViewportBase
    ref={ref}
    className={cn('fixed bottom-0 z-[100] flex max-h-screen w-full p-4 right-0 flex-col md:max-w-[319px]', className)}
    {...props}
  />
))
ToastViewport.displayName = ToastViewportBase.displayName

export default ToastViewport
