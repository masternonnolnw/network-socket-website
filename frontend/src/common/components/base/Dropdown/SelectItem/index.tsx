import { Item as SelectItemBase, ItemText as SelectItemText } from '@radix-ui/react-select'
import { ElementRef, forwardRef } from 'react'

import { selectItemVariant } from './styled'
import { SelectItemProps } from './types'

const SelectItem = forwardRef<ElementRef<typeof SelectItemBase>, SelectItemProps>(
  ({ className, children, size, ...props }, ref) => (
    <SelectItemBase ref={ref} className={selectItemVariant({ size, className })} {...props}>
      <SelectItemText>{children}</SelectItemText>
    </SelectItemBase>
  ),
)
SelectItem.displayName = SelectItemBase.displayName

export default SelectItem
