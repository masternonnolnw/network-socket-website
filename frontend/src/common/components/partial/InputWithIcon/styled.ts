import { tv } from '@/common/libs/tailwind'

export const inputVariant = tv({
  slots: {
    input: ['peer'],
    icon: [
      'absolute text-medium w-4 h-4 top-1/2 -translate-y-1/2',
      'peer-disabled:text-medium peer-disabled:opacity-50 peer-focus:text-primary peer-hover:text-primary',
      'peer-invalid:text-system-error peer-focus:peer-invalid:text-system-error peer-hover:peer-invalid:text-system-error',
    ],
    errorLabel: [
      'body3 text-system-error',
      'peer-disabled:text-system-error',
      'peer-invalid:text-system-error peer-focus:peer-invalid:text-system-error peer-hover:peer-invalid:text-system-error',
    ],
  },
  variants: {
    variantSize: {
      sm: {
        icon: 'w-3 h-3 left-2',
      },
      md: { icon: 'w-4 h-4 left-2.5' },
      lg: { icon: 'w-6 h-6 left-3.5' },
    },
    error: {
      true: {
        icon: [
          'text-system-error',
          'peer-disabled:text-system-error',
          'peer-hover:text-system-error',
          'peer-focus:text-system-error',
        ],
      },
    },
    hasIcon: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    {
      hasIcon: true,
      variantSize: 'sm',
      className: {
        input: 'pl-6',
      },
    },
    {
      hasIcon: true,
      variantSize: 'md',
      className: {
        input: 'pl-8',
      },
    },
    {
      hasIcon: true,
      variantSize: 'lg',
      className: {
        input: 'pl-12',
      },
    },
  ],
  defaultVariants: {
    variantSize: 'md',
  },
})
