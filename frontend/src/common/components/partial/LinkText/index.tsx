import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import Typography from '@/common/components/base/Typography'

import { LinkTextProps } from './types'

const LinkText = ({ text, link, className, target, onClick }: LinkTextProps) => {
  return (
    <Link href={link} target={target} className={`hover:underline decoration-primary ${className}`} onClick={onClick}>
      <Typography variant="body1" className="text-primary break-all">
        {text}
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4 ml-1" />
      </Typography>
    </Link>
  )
}

export default LinkText
