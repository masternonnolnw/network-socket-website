import { tv } from 'tailwind-variants'

export const loadingIndicatorVariant = tv({
  base: [
    'inline-block rounded-full align-[-0.125em]',
    'border-4 border-solid border-current border-r-transparent',
    'animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite]',
  ],
  variants: {
    size: {
      xs: 'h-6 w-6',
      sm: 'h-8 w-8',
      md: 'h-12 w-12',
      lg: 'h-16 w-16',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})
