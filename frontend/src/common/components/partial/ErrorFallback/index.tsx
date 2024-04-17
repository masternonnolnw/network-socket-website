import Link from 'next/link'

import Button from '@/common/components/base/Button'
import Typography from '@/common/components/base/Typography'

import { ErrorProps } from './types'

const ErrorFallback = (props: ErrorProps) => {
  const { buttonText, title, url, description } = props

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <div className="flex flex-col items-center gap-6 px-2">
        <img src="/assets/images/layout/cedt_logo.png" width="200px" />
        <div className="flex flex-col items-center gap-2 text-center">
          <Typography variant="h3" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            {description}
          </Typography>
          <Link href={url}>
            <Button>
              <Typography variant="h6">{buttonText}</Typography>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorFallback
