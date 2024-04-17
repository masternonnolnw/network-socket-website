import { Item as DropdownMenuItemBase } from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

const DropdownMenuItem = forwardRef<
  React.ElementRef<typeof DropdownMenuItemBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuItemBase> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuItemBase
    ref={ref}
    className={cn(
      'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
      'hover:bg-gray-100',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset ? 'pl-8' : '',
      className,
    )}
    {...props}
  />
))

DropdownMenuItem.displayName = DropdownMenuItemBase.displayName

export default DropdownMenuItem
