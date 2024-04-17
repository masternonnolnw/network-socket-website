import { tv } from '@/common/libs/tailwind'

export const sheetVariants = tv({
  base: [
    'fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out',
    'data-[state=open]:animate-in data-[state=open]:duration-300',
    'data-[state=closed]:animate-out data-[state=closed]:duration-300',
  ],
  variants: {
    side: {
      top: ['inset-x-0 top-0 border-b', 'data-[state=closed]:slide-out-to-top', 'data-[state=open]:slide-in-from-top'],
      bottom: [
        'inset-x-0 bottom-0 border-t',
        'data-[state=open]:slide-in-from-bottom',
        'data-[state=closed]:slide-out-to-bottom',
      ],
      left: [
        'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
        'data-[state=closed]:slide-out-to-left',
        'data-[state=open]:slide-in-from-left',
      ],
      right: [
        'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
        'data-[state=closed]:slide-out-to-right',
        'data-[state=open]:slide-in-from-right',
      ],
    },
  },
  defaultVariants: {
    side: 'right',
  },
})
