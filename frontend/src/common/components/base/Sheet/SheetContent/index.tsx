import { Content as SheetContentBase, Portal as SheetPortalBase } from '@radix-ui/react-dialog'
import { forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

import SheetOverlay from './components/SheetOverlay'
import { sheetVariants } from './styled'
import { SheetContentProps } from './types'

const SheetContent = forwardRef<React.ElementRef<typeof SheetContentBase>, SheetContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => (
    <SheetPortalBase>
      <SheetOverlay />
      <SheetContentBase ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
      </SheetContentBase>
    </SheetPortalBase>
  ),
)

SheetContent.displayName = SheetContentBase.displayName

export default SheetContent
