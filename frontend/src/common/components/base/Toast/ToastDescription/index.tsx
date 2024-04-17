import { Description as ToastDescriptionBase } from '@radix-ui/react-toast'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

const ToastDescription = forwardRef<
  ElementRef<typeof ToastDescriptionBase>,
  ComponentPropsWithoutRef<typeof ToastDescriptionBase>
>(({ className, ...props }, ref) => (
  <ToastDescriptionBase ref={ref} className={cn('text-sm text-text-high text-justify', className)} {...props} />
))
ToastDescription.displayName = ToastDescriptionBase.displayName

export default ToastDescription
