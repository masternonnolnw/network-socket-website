import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '@/common/components/base/Button'

import { SelectAllButtonProps } from './types'

const SelectAllButton = ({ onClick, disabled }: SelectAllButtonProps) => {
  return (
    <Button variant="ghost" size="sm" className="whitespace-nowrap gap-[10px]" onClick={onClick} disabled={disabled}>
      <FontAwesomeIcon icon={faCheck} className="w-3 h-3" /> เลือกทั้งหมด
    </Button>
  )
}

export default SelectAllButton
