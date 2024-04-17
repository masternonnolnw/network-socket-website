import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import { Checkbox } from '@/common/components/base/Checkbox'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/common/components/base/Tooltip'
import Typography from '@/common/components/base/Typography'

import { ConsentBoxProps } from './types'

const ConsentBox = (props: ConsentBoxProps) => {
  const { checked, disabled, onCheckedChange } = props
  const [open, setOpen] = useState(false)

  return (
    <TooltipProvider>
      <div className="flex flex-nowrap items-center gap-1">
        <Checkbox onCheckedChange={onCheckedChange} checked={checked} disabled={disabled} />
        <Typography variant="body1" className="text-medium">
          ยินยอมให้นำส่งข้อมูลส่วนนี้กับบริษัท
        </Typography>

        <Tooltip
          delayDuration={50}
          open={open}
          onOpenChange={(open) => {
            setOpen(open)
          }}
        >
          <TooltipTrigger className="flex">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="w-3 h-3 text-medium cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
          </TooltipTrigger>
          <TooltipContent>
            หากไม่ยินยอม ข้อมูลจะไม่แสดงต่อบริษัท
            <br className="hidden md:flex" />
            ทั้งนี้บริษัทอาจขอข้อมูลจากนิสิตโดยตรงในภายหลัง
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

export default ConsentBox
