import * as React from 'react'

import { textareaVariants } from './styled'
import { TextareaProps } from './types'

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error = false, ...props }, ref) => {
  return (
    <textarea
      className={textareaVariants({
        error,
        className,
      })}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
