export interface FilterButtonGroupProps {
  setActivedFilter: (filter: string[]) => void
  activedFilter: string[]
  filters: string[]
}
