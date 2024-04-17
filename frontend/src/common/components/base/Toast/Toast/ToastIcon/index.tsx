import {
  faCircleCheck,
  faCircleExclamation,
  faInfoCircle,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ToastProps } from '../types'

const TOAST_MAPPER = {
  info: {
    icon: faInfoCircle,
    className: 'w-4 h-4 text-info-default',
  },
  warning: {
    icon: faCircleExclamation,
    className: 'w-4 h-4 text-warning-default',
  },
  error: {
    icon: faTriangleExclamation,
    className: 'w-4 h-4 text-error-default',
  },
  success: {
    icon: faCircleCheck,
    className: 'w-4 h-4 text-success-default',
  },
}

export function ToastIcon(type: ToastProps['variant']) {
  const iconVariant = type && TOAST_MAPPER[type]
  if (!iconVariant) return null
  const { icon, className } = iconVariant

  return <FontAwesomeIcon icon={icon} className={className} />
}
