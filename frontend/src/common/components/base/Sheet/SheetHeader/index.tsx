import { cn } from '@/common/utils/tailwind'

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
)

SheetHeader.displayName = 'SheetHeader'

export default SheetHeader
