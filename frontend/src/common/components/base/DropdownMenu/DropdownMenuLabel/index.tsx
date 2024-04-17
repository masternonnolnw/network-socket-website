import { Label as DropdownMenuLabelBase } from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

const DropdownMenuLabel = forwardRef<
  React.ElementRef<typeof DropdownMenuLabelBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuLabelBase> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuLabelBase
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-bold', inset ? 'pl-8' : '', className)}
    {...props}
  />
))

DropdownMenuLabel.displayName = DropdownMenuLabelBase.displayName

export default DropdownMenuLabel
