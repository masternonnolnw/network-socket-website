import { tv } from '@/common/libs/tailwind'

export const toastVariants = tv({
  base: [
    'flex flex-row w-full text-primary h-auto rounded-lg gap-2 text-sm transition-all',
    'data-[swipe=cancel]:translate-x-0',
    'data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=end]:animate-out',
    'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none ',
    'data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full',
  ],
  variants: {
    variant: {
      info: 'border border-system-info bg-system-info-bg text-system-info',
      success: 'border border-system-success bg-system-success-bg text-system-success',
      warning: 'border border-system-warning bg-system-warning-bg text-system-warning',
      error: 'border border-system-error bg-system-error-bg text-system-error',
    },
    size: {
      sm: 'py-2 px-3 h6',
      lg: 'py-3 px-4 h6',
    },
  },
  defaultVariants: {
    variant: 'info',
    size: 'sm',
  },
})
