import { tv } from '@/common/libs/tailwind'

export const inputVariant = tv({
  base: [
    'w-full rounded-sm border bg-white text-high',
    'hover:border-primary disabled:hover:border-gray-300',
    'focus:shadow-focused-primary focus:border-primary focus-visible:outline-none',
    'active:border-primary',
    'placeholder:text-placeholder',
    'disabled:bg-disable disabled:text-disable disabled:cursor-not-allowed disabled:opacity-50',
    'invalid:text-system-error invalid:border-system-error ',
    'focus:invalid:border-system-error active:invalid:border-system-error focus-visible:invalid:outline-none',
    'hover:invalid:border-system-error-light ',
    'focus:invalid:shadow-focused-error',
  ],
  variants: {
    variantSize: {
      sm: 'px-3 py-1 h6',
      md: 'px-3 py-2 h-10 h5',
      lg: 'p-3 h4',
    },
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
  defaultVariants: {
    error: false,
    variantSize: 'md',
  },
})
