import { tv } from '@/common/libs/tailwind'

export const checkboxVariants = tv(
  {
    base: [
      'aspect-square bg-white rounded border border-solid w-6 h-6',
      'hover:bg-light',
      'focus:bg-primary-bg focus:border focus:border-primary focus:shadow-focused-primary focus:outline-none',
      'disabled:cursor-not-allowed disabled:border-disable disabled:bg-disable',
      'data-[state=checked]:bg-primary data-[state=checked]:border-primary-medium data-[state=checked]:shadow-none',
    ],
    variants: {
      size: {
        md: 'w-6 h-6',
        sm: 'w-5 h-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg', 'xl'] },
)
