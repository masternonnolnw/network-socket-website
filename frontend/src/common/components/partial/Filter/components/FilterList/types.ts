export interface FilterListProps {
  filters: string[]
  activedFilter: string[]
  addActivedFilter: (filter: string) => void
  removeActivedFilter: (filter: string) => void
}
