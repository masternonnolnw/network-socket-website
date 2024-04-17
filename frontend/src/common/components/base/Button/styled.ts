import { tv } from '@/common/libs/tailwind'

export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center rounded-md',
    'ring-offset-background transition-colors',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  ],
  variants: {
    variant: {
      solid: [
        'bg-primary text-invert',
        'hover:bg-primary-medium',
        'active:bg-primary-dark',
        'disabled:bg-disable disabled:border disabled:border-disable disabled:opacity-100 disabled:text-disable',
      ],
      outline: [
        'bg-transparent text-primary border border-primary',
        'hover:bg-primary-bg hover:text-primary-medium hover:border-primary-medium',
        'active:bg-primary-bg active:text-primary-medium active:border-primary-medium',
        'disabled:border disabled:border-disable disabled:opacity-100 disabled:text-disable',
      ],
      ghost: [
        'bg-transparent text-primary',
        'hover:bg-primary-bg hover:text-primary-medium',
        'active:bg-primary-bg active:text-primary-medium',
        'disabled:bg-transparent disabled:opacity-100 disabled:text-disable',
      ],
      cancel: [
        'bg-white text-high border border-light',
        'hover:bg-light',
        'active:shadow-cancel',
        'disabled:border disabled:border-disable disabled:opacity-100 disabled:text-disable',
      ],
    },
    size: {
      sm: 'h-8 px-4 py-1 h6',
      md: 'h-10 px-4 py-2 h5',
      lg: 'h-12 px-4 py-3 h5',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})
