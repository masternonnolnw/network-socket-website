import * as React from 'react'

import { inputVariant } from './styled'
import { InputProps } from './types'

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, variantSize, error = false, type, ...prop } = props

  const input = inputVariant({
    variantSize,
    error,
    className,
  })

  return <input type={type} className={input} ref={ref} {...prop} />
})

Input.displayName = 'BaseInput'

export default Input
