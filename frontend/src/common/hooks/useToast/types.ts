import type { ToastProps } from '@/common/components/base/Toast/Toast/types'

import { TOAST_ACTION_TYPES } from './constants'
export type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
}

export type ToastActionType = typeof TOAST_ACTION_TYPES

export type ToastAction =
  | {
      type: ToastActionType['ADD_TOAST']
      toast: ToasterToast
    }
  | {
      type: ToastActionType['UPDATE_TOAST']
      toast: Partial<ToasterToast>
    }
  | {
      type: ToastActionType['DISMISS_TOAST']
      toastId?: ToasterToast['id']
    }
  | {
      type: ToastActionType['REMOVE_TOAST']
      toastId?: ToasterToast['id']
    }

export interface ToastState {
  toasts: ToasterToast[]
}

export type Toast = Omit<ToasterToast, 'id'>
