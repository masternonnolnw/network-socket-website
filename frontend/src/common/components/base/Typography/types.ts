import { ComponentPropsWithRef } from 'react'
import { VariantProps } from 'tailwind-variants'

import { typographyVariant } from './styled'

export interface TypographyProps extends ComponentPropsWithRef<'div'>, VariantProps<typeof typographyVariant> {
  component?: VariantProps<typeof typographyVariant>['variant']
}
