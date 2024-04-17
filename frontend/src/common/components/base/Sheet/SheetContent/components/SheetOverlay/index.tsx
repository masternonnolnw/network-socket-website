import { Overlay as SheetOverlayBase } from '@radix-ui/react-dialog'
import { forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

const SheetOverlay = forwardRef<
  React.ElementRef<typeof SheetOverlayBase>,
  React.ComponentPropsWithoutRef<typeof SheetOverlayBase>
>(({ className, ...props }, ref) => (
  <SheetOverlayBase
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
))

SheetOverlay.displayName = SheetOverlayBase.displayName

export default SheetOverlay
