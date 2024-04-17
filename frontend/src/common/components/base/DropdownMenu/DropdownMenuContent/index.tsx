import { Content as DropdownMenuContentBase, Portal as DropdownMenuPortalBase } from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof DropdownMenuContentBase>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuContentBase>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPortalBase>
    <DropdownMenuContentBase
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 bg-white text-black shadow-md',
        'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=top]:slide-in-from-bottom-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        className,
      )}
      {...props}
    />
  </DropdownMenuPortalBase>
))

DropdownMenuContent.displayName = DropdownMenuContentBase.displayName

export default DropdownMenuContent
