import { ChangeEvent, DragEvent } from 'react'

export interface FileUploadProps {
  file?: File | null
  uploadText: string
  uploadStatus: 'default' | 'success' | 'error'
  inputRef: React.MutableRefObject<HTMLInputElement | null>
  accept?: string
  isLoading?: boolean
  handleDragOver(e: DragEvent<HTMLDivElement>): void
  handleDrop(e: DragEvent<HTMLDivElement>): void
  handleFileChange(e: ChangeEvent<HTMLInputElement>): void
  handleButtonClick(): void
}
