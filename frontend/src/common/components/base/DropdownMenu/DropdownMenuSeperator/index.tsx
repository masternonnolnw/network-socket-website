import { Separator as DropdownMenuSeperatorBase } from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

const DropdownMenuSeparator = forwardRef<
  React.ElementRef<typeof DropdownMenuSeperatorBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSeperatorBase>
>(({ className, ...props }, ref) => (
  <DropdownMenuSeperatorBase ref={ref} className={cn('-mx-1 my-1 h-px bg-slate-100', className)} {...props} />
))
DropdownMenuSeparator.displayName = DropdownMenuSeperatorBase.displayName

export default DropdownMenuSeparator
