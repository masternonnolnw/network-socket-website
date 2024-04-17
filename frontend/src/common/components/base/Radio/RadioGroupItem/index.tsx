import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Indicator as RadioGroupIndicatorBase, Item as RadioGroupItemBase } from '@radix-ui/react-radio-group'
import { ElementRef, forwardRef } from 'react'

import { circleVariant, radioGroupItemVariant } from './styled'
import { RadioGroupItemProps } from './types'

const RadioGroupItem = forwardRef<ElementRef<typeof RadioGroupItemBase>, RadioGroupItemProps>(
  ({ className, size, children: _children, disabled, ...props }, ref) => {
    return (
      <RadioGroupItemBase
        {...props}
        disabled={disabled}
        ref={ref}
        className={radioGroupItemVariant({ className, size, disabled })}
      >
        <RadioGroupIndicatorBase className="flex items-center justify-center">
          <FontAwesomeIcon icon={faCircle} className={circleVariant({ disabled })} />
        </RadioGroupIndicatorBase>
      </RadioGroupItemBase>
    )
  },
)

RadioGroupItem.displayName = RadioGroupItemBase.displayName

export default RadioGroupItem
