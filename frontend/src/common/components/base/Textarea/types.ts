import { VariantProps } from 'tailwind-variants'

import { textareaVariants } from './styled'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean
}
