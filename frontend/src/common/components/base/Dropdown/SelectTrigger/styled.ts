import { tv } from '@/common/libs/tailwind'

export const selectTriggerVariant = tv({
  base: [
    'flex items-center justify-between w-fit rounded-md border border-solid bg-white text-high gap-1',
    'data-[placeholder]:text-placeholder',
    'focus:outline-none focus:border focus:border-primary focus:ring',
    'disabled:cursor-not-allowed disabled:bg-disable disabled:text-disable disabled:border-disable',
  ],
  variants: {
    size: {
      lg: 'px-2 py-3 h5',
      md: 'p-2 text-base h5',
      sm: 'p-2 text-sm h6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
