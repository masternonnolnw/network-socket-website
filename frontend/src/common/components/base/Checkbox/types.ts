import { Root as CheckboxPrimitive } from '@radix-ui/react-checkbox'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'

import { checkboxVariants } from './styled'

export interface CheckboxProps
  extends ComponentPropsWithoutRef<typeof CheckboxPrimitive>,
    VariantProps<typeof checkboxVariants> {
  label?: ReactNode
  labelClassName?: string
}
