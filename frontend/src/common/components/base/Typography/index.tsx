import { forwardRef } from 'react'

import { typographyVariant } from './styled'
import { TypographyProps } from './types'

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  tiny: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p',
} as const

const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, variant, fontWeight, component, ...props }, ref) => {
    const Component = component ? variantsMapping[component] : 'p'

    return <Component {...props} className={typographyVariant({ fontWeight, variant, className })} ref={ref} />
  },
)

Typography.displayName = 'Typography'

export default Typography
