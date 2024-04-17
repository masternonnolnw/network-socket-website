import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export interface NumberInputProps {
  value?: number | null
  setValue?: (value: number | null) => void
  title: string
  placeholder?: string
  placeholderMd?: string

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegisterReturn<any>

  error?: FieldError
}
