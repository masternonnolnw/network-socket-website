import { Item as RadioGroupItemBase } from '@radix-ui/react-radio-group'
import { ComponentPropsWithoutRef } from 'react'
import { VariantProps } from 'tailwind-variants'

import { radioGroupItemVariant } from './styled'

export interface RadioGroupItemProps
  extends ComponentPropsWithoutRef<typeof RadioGroupItemBase>,
    Omit<VariantProps<typeof radioGroupItemVariant>, 'disabled'> {}
