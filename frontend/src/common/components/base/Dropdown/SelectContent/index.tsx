import {
  Content as SelectContentBase,
  Portal as SelectPortal,
  Viewport as SelectViewport,
} from '@radix-ui/react-select'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

import { selectContentVariant } from './styled'

const SelectContent = forwardRef<
  ElementRef<typeof SelectContentBase>,
  ComponentPropsWithoutRef<typeof SelectContentBase>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPortal>
    <SelectContentBase
      ref={ref}
      className={selectContentVariant({ position, className })}
      position={position}
      {...props}
    >
      <SelectViewport
        className={cn(
          'p-1',
          position === 'popper'
            ? 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
            : '',
        )}
      >
        {children}
      </SelectViewport>
    </SelectContentBase>
  </SelectPortal>
))
SelectContent.displayName = SelectContentBase.displayName

export default SelectContent
