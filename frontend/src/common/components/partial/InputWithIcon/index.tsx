import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

import BaseInput from '@/common/components/base/Input'
import { cn } from '@/common/utils/tailwind'

import { inputVariant } from './styled'
import { InputProps } from './types'

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, variantSize, error = false, type, containerClassName, prefixIcon, errorLabel, ...prop } = props

  const {
    input,
    icon,
    errorLabel: errorLabelcn,
  } = inputVariant({
    variantSize,
    error,
    hasIcon: !!prefixIcon,
  })

  return (
    <div className={cn('w-full', containerClassName)}>
      <span aria-disabled={prop.disabled} className="flex relative w-full">
        <BaseInput
          type={type}
          variantSize={variantSize}
          error={error}
          ref={ref}
          className={input({ className })}
          {...prop}
        />
        {prefixIcon && <FontAwesomeIcon className={icon()} icon={prefixIcon} />}
      </span>
      {error && (
        <label htmlFor={prop.id} className={errorLabelcn()}>
          {errorLabel}
        </label>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
