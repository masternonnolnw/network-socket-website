export interface FilterBoxProps {
  filters: string[]
  activedFilter: string[]
  setActivedFilter: (filter: string[]) => void
  addActivedFilter: (filter: string) => void
  removeActivedFilter: (filter: string) => void
}
