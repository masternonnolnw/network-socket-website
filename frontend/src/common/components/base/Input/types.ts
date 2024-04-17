export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variantSize?: 'sm' | 'md' | 'lg'
  error?: boolean
}
