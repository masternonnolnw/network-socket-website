import { Root as ToastRoot } from '@radix-ui/react-toast'
import { ElementRef, forwardRef } from 'react'

import { toastVariants } from './styled'
import { ToastIcon } from './ToastIcon'
import { ToastProps } from './types'

const Toast = forwardRef<ElementRef<typeof ToastRoot>, ToastProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <ToastRoot ref={ref} className={toastVariants({ variant, size, className })} {...props}>
        <div className="w-5 h-5 flex justify-center items-center h6">{ToastIcon(variant)}</div>
        <div className="flex flex-col gap-0.5">{children}</div>
      </ToastRoot>
    )
  },
)
Toast.displayName = ToastRoot.displayName

export default Toast
