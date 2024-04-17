import { tv } from '@/common/libs/tailwind'

export const textareaVariants = tv({
  base: [
    'flex min-h-[80px] w-full rounded-md border border-input bg-background',
    'px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'h5 scrollbar-hide',
    'focus:border-primary active:border-primary focus-visible:outline-none',
    'focus:shadow-focused-primary',
  ],
  variants: {
    error: {
      true: [
        'text-system-error border-system-error bg-red-50',
        'placeholder:text-system-error-light',
        'focus:border-system-error focus:shadow-focused-error focus-visible:outline-none',
        'active:border-system-error',
        'hover:border-system-error-light',
        'disabled:hover:border-system-error disabled:bg-red-50',
      ],
    },
  },
})
