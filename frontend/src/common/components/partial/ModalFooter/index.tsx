import Button from '@/common/components/base/Button'
import LoadingIndicator from '@/common/components/partial/LoadingIndicator'

import { ModalFooterProps } from './types'

const ModalFooter = ({ setOpen, onSubmit, isForm, isLoading, disabled }: ModalFooterProps) => {
  return (
    <div className="flex flex-row gap-2 justify-end max-md:justify-center mt-1 pt-3">
      <Button
        type="button"
        disabled={isLoading}
        variant="cancel"
        className="px-[34.5px] max-md:w-full"
        onClick={() => setOpen(false)}
      >
        ยกเลิก
      </Button>
      <Button
        type={isForm ? 'submit' : 'button'}
        disabled={isLoading || disabled}
        variant="solid"
        className="flex gap-2 px-[34.5px] max-md:w-full"
        onClick={() => {
          if (!isForm) onSubmit?.()
        }}
      >
        {isLoading && <LoadingIndicator size="xs" />}
        บันทึก
      </Button>
    </div>
  )
}

export default ModalFooter
