import { cn } from '@/common/utils/tailwind'

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
)

SheetFooter.displayName = 'SheetFooter'

export default SheetFooter
