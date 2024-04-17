import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { VariantProps } from 'tailwind-variants'

import { inputVariant } from './styled'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Omit<VariantProps<typeof inputVariant>, 'hasIcon'> {
  containerClassName?: string
  errorLabel?: string
  prefixIcon?: IconDefinition
}
