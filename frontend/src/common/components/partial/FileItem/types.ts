export interface FileItemProps {
  file?: File | null
  url: string
  name: string
  size: number
  lastModified: string
  isLoading?: boolean
}
