export interface ModalFooterProps {
  isForm?: boolean
  isLoading?: boolean
  setOpen: (open: boolean) => void
  onSubmit?: () => void

  disabled?: boolean
}
