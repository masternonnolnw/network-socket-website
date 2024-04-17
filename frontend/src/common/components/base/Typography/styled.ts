import { tv } from 'tailwind-variants'

export const typographyVariant = tv({
  variants: {
    variant: {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      tiny: 'tiny',
      body1: 'body1',
      body2: 'body2',
      body3: 'body3',
    },
    fontWeight: {
      regular: 'font-normal',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'body1',
    fontWeight: 'regular',
  },
})
