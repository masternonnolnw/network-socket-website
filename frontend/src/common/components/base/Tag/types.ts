import { ComponentProps } from 'react'
import { VariantProps } from 'tailwind-variants'

import { tagVariants } from './styled'

export interface TagProps extends ComponentProps<'div'>, VariantProps<typeof tagVariants> {
  text: string
}
