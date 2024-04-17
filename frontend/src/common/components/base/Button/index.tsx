import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { buttonVariants } from './styled'
import { ButtonProps } from './types'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={buttonVariants({ variant, size, class: className })} ref={ref} {...props} disabled={disabled} />
    )
  },
)

Button.displayName = 'Button'

export default Button
