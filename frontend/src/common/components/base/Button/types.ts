import { VariantProps } from 'tailwind-variants'

import { buttonVariants } from './styled'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}
