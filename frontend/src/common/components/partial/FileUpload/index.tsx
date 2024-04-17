import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '@/common/components/base/Button'
import Typography from '@/common/components/base/Typography'
import LoadingIndicator from '@/common/components/partial/LoadingIndicator'

import { FileUploadProps } from './types'

const FileUpload = (props: FileUploadProps) => {
  const {
    uploadText,
    uploadStatus,
    handleDragOver,
    handleDrop,
    handleFileChange,
    handleButtonClick,
    inputRef,
    isLoading,
    accept,
  } = props

  return (
    <div
      className="flex items-center justify-center w-full h-fit border border-primary border-dashed rounded-md px-3 py-10"
      onDragOver={!isLoading ? handleDragOver : undefined}
      onDrop={!isLoading ? handleDrop : undefined}
    >
      <div className="flex flex-row items-center justify-center gap-2 max-md:flex-col">
        <div className="flex flex-row gap-2">
          {uploadStatus === 'default' && <FontAwesomeIcon icon={faCloudArrowUp} className="w-5 h-5 text-primary" />}
          <Typography variant="h5" className={`${uploadStatus === 'error' ? 'text-system-error' : 'text-primary'}`}>
            {uploadText}
          </Typography>
        </div>
        <input type="file" hidden ref={inputRef} onChange={handleFileChange} accept={accept} />
        <Button disabled={isLoading} variant="solid" size="md" onClick={handleButtonClick}>
          <div className="flex flex-row gap-2">
            {isLoading && <LoadingIndicator size="xs" />}
            {!(uploadStatus === 'default') && <FontAwesomeIcon icon={faCloudArrowUp} className="w-5 h-5 text-invert" />}
            {uploadStatus === 'default' ? 'คลิกเพื่ออัพโหลดไฟล์' : 'อัพโหลดอีกครั้ง'}
          </div>
        </Button>
      </div>
    </div>
  )
}

export default FileUpload
