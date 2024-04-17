import { Trigger as SelectTriggerBase } from '@radix-ui/react-select'
import { ComponentPropsWithoutRef } from 'react'
import { VariantProps } from 'tailwind-variants'

import { selectTriggerVariant } from './styled'

export interface SelectTriggerProps
  extends ComponentPropsWithoutRef<typeof SelectTriggerBase>,
    VariantProps<typeof selectTriggerVariant> {}
