import FilterButtonGroup from '@/common/components/partial/Filter/components/FilterButtonGroup'
import FilterList from '@/common/components/partial/Filter/components/FilterList'

import FilterTitle from './components/FilterTitle'
import { FilterBoxProps } from './types'

const FilterBox = ({
  filters,
  activedFilter,
  setActivedFilter,
  addActivedFilter,
  removeActivedFilter,
}: FilterBoxProps) => {
  return (
    <div className="flex flex-col gap-4">
      <FilterTitle />
      <FilterList
        filters={filters}
        activedFilter={activedFilter}
        addActivedFilter={addActivedFilter}
        removeActivedFilter={removeActivedFilter}
      />
      <FilterButtonGroup setActivedFilter={setActivedFilter} activedFilter={activedFilter} filters={filters} />
    </div>
  )
}

export default FilterBox
