import { Title as ToastTitleBase } from '@radix-ui/react-toast'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

const ToastTitle = forwardRef<ElementRef<typeof ToastTitleBase>, ComponentPropsWithoutRef<typeof ToastTitleBase>>(
  ({ className, ...props }, ref) => (
    <ToastTitleBase ref={ref} className={cn('h6 font-bold text-justify', className)} {...props} />
  ),
)
ToastTitle.displayName = ToastTitleBase.displayName

export default ToastTitle
