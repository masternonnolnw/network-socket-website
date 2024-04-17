import { tv } from '@/common/libs/tailwind'

export const selectItemVariant = tv({
  base: [
    'relative flex w-full cursor-pointer select-none items-center text-high outline-none',
    'hover:bg hover:rounded-lg',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  ],
  variants: {
    size: {
      lg: 'py-3 px-2 h5',
      md: 'p-2 h5',
      sm: 'py-1 px-2 h6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
