import { Item as SelectItemBase } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef } from 'react'
import { VariantProps } from 'tailwind-variants'

import { selectItemVariant } from './styled'

export interface SelectItemProps
  extends ComponentPropsWithoutRef<typeof SelectItemBase>,
    VariantProps<typeof selectItemVariant> {}
