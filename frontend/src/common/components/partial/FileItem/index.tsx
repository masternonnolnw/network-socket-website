import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Typography from '@/common/components/base/Typography'
import LoadingIndicator from '@/common/components/partial/LoadingIndicator'

import { FileItemProps } from './types'

const FileItem = ({ lastModified, name, size, url, isLoading }: FileItemProps) => {
  const [date, time] = lastModified.split(' ')

  if (isLoading) return <LoadingIndicator className="m-auto" />

  return (
    <div className="flex flex-col gap-2 md:items-center md:flex-row">
      <a href={url} target="_blank" referrerPolicy="no-referrer" rel="noreferrer">
        <div className="flex flex-row px-4 py-2 gap-2 rounded bg-light w-fit items-baseline">
          <FontAwesomeIcon icon={faFile} className="w-5 h-5 max-md:w-4 max-md:h-4 text-medium self-stretch" />
          <Typography variant="h5" fontWeight="bold" className="text-medium break-all">
            {name}
          </Typography>
          <Typography variant="tiny" className="text-medium">
            {(size / 1024).toFixed(1)} KB
          </Typography>
        </div>
      </a>
      <Typography variant="tiny" className="text-medium">
        อัพโหลดล่าสุด {date} เวลา {time}
      </Typography>
    </div>
  )
}

export default FileItem
