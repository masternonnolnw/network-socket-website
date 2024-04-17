import { Content as SheetContentBase } from '@radix-ui/react-dialog'
import { VariantProps } from 'tailwind-variants'

import { sheetVariants } from './styled'

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetContentBase>,
    VariantProps<typeof sheetVariants> {}
