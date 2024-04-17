import { Root as ToastRoot } from '@radix-ui/react-toast'
import { ComponentPropsWithoutRef } from 'react'
import { VariantProps } from 'tailwind-variants'

import { toastVariants } from './styled'

export interface ToastProps extends ComponentPropsWithoutRef<typeof ToastRoot>, VariantProps<typeof toastVariants> {}
