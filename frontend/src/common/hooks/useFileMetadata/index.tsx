import axios from 'axios'
import { useEffect, useState } from 'react'

const useFileMetadata = (file: string | File) => {
  const [size, setSize] = useState<number>(0)
  const [lastModified, setLastModified] = useState<string>('')
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')

  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const fileUrl = typeof file === 'string' ? file : URL.createObjectURL(file)

    const fetchFile = async () => {
      if (!file) return

      setIsReady(false)

      const res = await axios.get(fileUrl, { responseType: 'blob' })

      let fileName = fileUrl.split('?')[0].split('/').pop() || ''
      let lastModified = res.headers['last-modified']

      const fileSize = res.headers['content-length']
      const date = new Date(lastModified)

      const fileBlob = new File([res.data], fileName, { type: res.headers['content-type'] })
      const _fileUrl = URL.createObjectURL(fileBlob)

      lastModified = date.toLocaleString('th-TH')

      if (typeof file !== 'string') {
        fileName = file.name
        lastModified = new Date(file.lastModified).toLocaleString('th-TH')
      }

      setSize(fileSize)
      setUrl(_fileUrl)

      setLastModified(lastModified)
      setName(fileName)
      setIsReady(true)
    }

    fetchFile()

    return () => {
      URL.revokeObjectURL(fileUrl)
    }
  }, [file])

  return { lastModified, size, url, isReady, name }
}

export default useFileMetadata
