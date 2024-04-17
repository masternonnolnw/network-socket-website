import { tv } from 'tailwind-variants'

export const badgeVariants = tv({
  base: ['inline-flex items-center rounded-full transition-colors', 'rounded-[4px] w-fit border border-transparent'],
  variants: {
    variant: {
      solid: 'bg-primary text-white',
      outline: 'bg-transparent text-primary border border-primary',
      submitted: 'bg-system-success text-white',
      late: 'bg-system-warning text-white',
      notSubmitted: 'bg-dark text-white',
      feedback: 'bg-transparent text-system-success border border-system-success',
    },
    size: {
      sm: 'h-[22px] tiny py-[2px] px-2',
      md: 'h-7 h6 py-1 px-2',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})
