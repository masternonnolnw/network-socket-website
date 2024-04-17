import { tv } from '@/common/libs/tailwind'

export const radioGroupItemVariant = tv(
  {
    base: [
      'aspect-square bg-white rounded-full border ring-offset-2',
      'hover:bg-light',
      'focus:outline-none focus:bg-primary-bg focus:border focus:border-primary',
      'disabled:cursor-not-allowed disabled:border-disable disabled:bg-disable',
    ],

    variants: {
      disabled: {
        false:
          'data-[state=checked]:bg-primary data-[state=checked]:border-transparent data-[state=checked]:ring-primary-medium data-[state=checked]:ring-offset-0 data-[state=checked]:ring-2',
        true: '',
      },
      size: {
        md: 'w-6 h-6',
        sm: 'w-5 h-5',
      },
    },
    defaultVariants: {
      size: 'sm',
      disabled: false,
    },
  },
  { responsiveVariants: ['sm', 'md', 'lg', 'xl'] },
)

export const circleVariant = tv({
  base: 'h-2 w-2',
  variants: {
    disabled: {
      true: 'fill-[--text-disable]',
      false: 'fill-white',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})
