import ClearFilterButton from '../ClearFilterButton'
import SelectAllButton from './components/SelectAllButton'
import { FilterButtonGroupProps } from './types'

const FilterButtonGroup = ({ setActivedFilter, activedFilter, filters }: FilterButtonGroupProps) => {
  return (
    <div className="flex flex-col min-[350px]:flex-row w-full h-fit gap-x-2 gap-y-4 items-center justify-center">
      <SelectAllButton
        onClick={() => {
          setActivedFilter(filters)
        }}
        disabled={activedFilter.length === filters.length}
      />
      <ClearFilterButton
        onClick={() => {
          setActivedFilter([])
        }}
        disabled={activedFilter.length === 0}
      />
    </div>
  )
}

export default FilterButtonGroup
