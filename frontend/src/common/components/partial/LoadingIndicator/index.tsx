import { loadingIndicatorVariant } from './styled'
import { LoadingIndicatorProps } from './types'

const LoadingIndicator = (props: LoadingIndicatorProps) => {
  const { className, size, ...prop } = props

  const loadingClassName = loadingIndicatorVariant({ size, className })

  return (
    <span {...prop} className={loadingClassName} role="status">
      <span className="sr-only">Loading...</span>
    </span>
  )
}

export default LoadingIndicator
