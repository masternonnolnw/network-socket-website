import CheckboxChip from '@/common/components/partial/CheckboxChip'

import { FilterListProps } from './types'

const FilterList = ({ filters, activedFilter, addActivedFilter, removeActivedFilter }: FilterListProps) => {
  return (
    <div className="flex flex-wrap gap-2 p-1">
      {filters.map((filter) => (
        <CheckboxChip
          key={filter}
          label={filter}
          checked={activedFilter.includes(filter)}
          onChange={(checked) => {
            if (checked) {
              addActivedFilter(filter)
            } else {
              removeActivedFilter(filter)
            }
          }}
        />
      ))}
    </div>
  )
}

export default FilterList
