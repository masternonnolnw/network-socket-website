import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Badge } from '@/common/components/base/Badge'

import { CheckboxChipProps } from './types'

const CheckboxChip = ({ label, checked, onChange }: CheckboxChipProps) => {
  return checked ? (
    <Badge
      variant="solid"
      className="cursor-pointer bg-primary-bg text-primary-medium hover:opacity-75 duration-75"
      onClick={() => {
        onChange(false)
      }}
    >
      <FontAwesomeIcon icon={faCheck} className="w-3 h-3 mr-2" />
      {label}
    </Badge>
  ) : (
    <Badge
      variant="outline"
      className="cursor-pointer duration-75 hover:bg-primary-bg hover:text-primary-medium hover:border-primary-medium"
      onClick={() => {
        onChange(true)
      }}
    >
      {label}
    </Badge>
  )
}

export default CheckboxChip
