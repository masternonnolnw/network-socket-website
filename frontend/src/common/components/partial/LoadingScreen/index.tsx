import LoadingIndicator from '@/common/components/partial/LoadingIndicator'
import { cn } from '@/common/utils/tailwind'

import { LoadingScreenProps } from './types'

const LoadingScreen = ({ fixed = true, loadingClassName }: LoadingScreenProps) => {
  return (
    <div
      className={cn(
        fixed ? 'fixed' : 'absolute',
        'z-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-md',
      )}
    >
      <LoadingIndicator size="lg" className={cn('text-primary', loadingClassName)} />
    </div>
  )
}

export default LoadingScreen
