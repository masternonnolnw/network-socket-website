import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

import Typography from '@/common/components/base/Typography'
import { cn } from '@/common/utils/tailwind'

import { PDFViewerProps } from './types'

const PDFViewer = ({ file, url }: PDFViewerProps) => {
  const [isError, setIsError] = useState(true)

  return (
    <article className="relative">
      <object
        data={`${file}#toolbar=0`}
        type="application/pdf"
        onLoadCapture={() => {
          setIsError(false)
        }}
        className={cn(!isError ? 'h-[600px] max-md:h-[300px]' : '', 'w-full flex justify-center items-center')}
      >
        <Typography
          variant="h4"
          className="w-full text-center border-2 border-system-error py-4 text-system-error-dark"
          fontWeight="bold"
        >
          ไม่สามารถแสดงไฟล์ตัวอย่าง PDF ได้
        </Typography>
      </object>
      {!isError && (
        <a
          href={url ?? file}
          target="_blank"
          rel="noreferrer"
          className="absolute flex items-center justify-center right-5 top-5 bg-slate-900 w-5 h-5 p-3 rounded-full md:w-10 md:h-10 md:right-10"
        >
          <FontAwesomeIcon icon={faExternalLink} color="white" className="w-3 h-3 md:w-4 md:h-4" />
        </a>
      )}
    </article>
  )
}

export default PDFViewer
