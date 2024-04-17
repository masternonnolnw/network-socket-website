import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon as SelectIcon, Trigger as SelectTriggerBase } from '@radix-ui/react-select'
import { ElementRef, forwardRef } from 'react'

import { selectTriggerVariant } from './styled'
import { SelectTriggerProps } from './types'

const SelectTrigger = forwardRef<ElementRef<typeof SelectTriggerBase>, SelectTriggerProps>(
  ({ className, children, size, ...props }, ref) => (
    <SelectTriggerBase ref={ref} className={selectTriggerVariant({ size, className })} {...props}>
      {children}
      <SelectIcon asChild>
        <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4 text-medium" />
      </SelectIcon>
    </SelectTriggerBase>
  ),
)

SelectTrigger.displayName = SelectTriggerBase.displayName

export default SelectTrigger
