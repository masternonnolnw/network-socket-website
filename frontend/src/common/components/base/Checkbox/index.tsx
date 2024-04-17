import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Indicator as CheckboxIndicator, Root as CheckboxPrimitive } from '@radix-ui/react-checkbox'
import { ElementRef, forwardRef } from 'react'

import { cn } from '@/common/utils/tailwind'

import { checkboxVariants } from './styled'
import { CheckboxProps } from './types'

const Checkbox = forwardRef<ElementRef<typeof CheckboxPrimitive>, CheckboxProps>(
  ({ className, size, id, label, labelClassName, ...props }, ref) => (
    <div className="flex items-center space-x-2">
      <CheckboxPrimitive ref={ref} className={checkboxVariants({ className, size })} id={id} {...props}>
        <CheckboxIndicator className="flex items-center justify-center text-white">
          <FontAwesomeIcon icon={faCheck} className="h-4 w-4" />
        </CheckboxIndicator>
      </CheckboxPrimitive>
      <label htmlFor={id} className={cn('h5', labelClassName)}>
        {label}
      </label>
    </div>
  ),
)
Checkbox.displayName = CheckboxPrimitive.displayName

export { Checkbox }
