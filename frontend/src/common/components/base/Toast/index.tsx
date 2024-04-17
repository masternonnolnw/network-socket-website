import { useToast } from '@/common/hooks/useToast'

import Toast from './Toast'
import ToastDescription from './ToastDescription'
import ToastProvider from './ToastProvider'
import ToastTitle from './ToastTitle'
import ToastViewport from './ToastViewport'

const Toaster = () => {
  const { toasts } = useToast()
  return (
    <>
      {toasts.map(({ id, title, description, ...props }) => {
        return (
          <Toast key={id} {...props}>
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </Toast>
        )
      })}
    </>
  )
}
export { Toast, ToastDescription, Toaster, ToastProvider, ToastTitle, ToastViewport }
