import { tv } from '@/common/libs/tailwind'

export const tagVariants = tv({
  base: ['flex items-center justify-center rounded'],
  variants: {
    variant: {
      solid: 'text-primary-medium bg-primary-bg',
      outline: 'text-primary border border-primary',
    },
    size: {
      sm: 'px-2 py-0.5 tiny',
      md: 'px-2 py-1 h6',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})
