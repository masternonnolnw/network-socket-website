import { VariantProps } from 'tailwind-variants'

import { badgeVariants } from './styled'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}
