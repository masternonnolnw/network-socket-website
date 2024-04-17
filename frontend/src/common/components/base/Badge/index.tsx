import * as React from 'react'

import { cn } from '@/common/utils/tailwind'

import { badgeVariants } from './styled'
import { BadgeProps } from './types'

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }
