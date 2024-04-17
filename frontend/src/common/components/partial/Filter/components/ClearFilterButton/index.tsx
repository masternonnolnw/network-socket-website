import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '@/common/components/base/Button'

import { ClearFilterButtonProps } from './types'

const ClearFilterButton = ({ onClick, disabled = false }: ClearFilterButtonProps) => {
  return (
    <Button variant="ghost" size="sm" className="whitespace-nowrap gap-[10px]" onClick={onClick} disabled={disabled}>
      <FontAwesomeIcon icon={faArrowLeftRotate} className="w-3 h-3" /> ล้างตัวกรอง
    </Button>
  )
}

export default ClearFilterButton
