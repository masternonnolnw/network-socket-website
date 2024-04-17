import Typography from '@/common/components/base/Typography'
import Input from '@/common/components/partial/InputWithIcon'

import { NumberInputProps } from './types'

const NumberInputWithLabel = ({
  value,
  setValue,
  title,
  placeholder,
  placeholderMd,
  register,
  error,
}: NumberInputProps) => {
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value)
    if (isNaN(val)) setValue?.(null)
  }

  return (
    <div className="flex flex-row w-full h-fit items-start gap-2 md:gap-8">
      <Typography variant="h5" className="w-[27%] mt-2 min-w-fit whitespace-nowrap">
        {title}
      </Typography>
      <div className="flex w-full h-fit flex-col gap-1">
        <Input
          variantSize="md"
          placeholder={placeholder ?? placeholderMd ?? ''}
          containerClassName="w-[73%]"
          type="number"
          value={value ?? undefined}
          onChange={handleOnchange ?? undefined}
          {...register}
          error={!!error}
          step="any"
        />
        <Typography variant="body3" className="w-full text-system-error">
          {error?.message ?? ''}
        </Typography>
      </div>
    </div>
  )
}

export default NumberInputWithLabel
