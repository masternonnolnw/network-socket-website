import { HTMLAttributes } from 'react'
import { VariantProps } from 'tailwind-variants'

import { loadingIndicatorVariant } from './styled'

export type LoadingIndicatorProps = Omit<HTMLAttributes<HTMLSpanElement>, 'children'> &
  VariantProps<typeof loadingIndicatorVariant>
