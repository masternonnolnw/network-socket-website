import { Accordion, AccordionContent, AccordionItem } from '@/common/components/base/Accordion'
import ClearFilterButton from '@/common/components/partial/Filter/components/ClearFilterButton'
import FilterButtonGroup from '@/common/components/partial/Filter/components/FilterButtonGroup'
import FilterList from '@/common/components/partial/Filter/components/FilterList'

import FilterTitle from './components/FilterTitle'
import { FilterBarProps } from './types'

const FilterBar = ({
  filters,
  activedFilter,
  setActivedFilter,
  addActivedFilter,
  removeActivedFilter,
}: FilterBarProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-none">
        <div className="flex flex-row w-full h-fit justify-between items-center">
          <FilterTitle />
          <ClearFilterButton
            onClick={() => {
              setActivedFilter([])
            }}
            disabled={activedFilter.length === 0}
          />
        </div>

        <AccordionContent>
          <FilterList
            filters={filters}
            activedFilter={activedFilter}
            addActivedFilter={addActivedFilter}
            removeActivedFilter={removeActivedFilter}
          />
          <div className="flex w-full pt-4">
            <FilterButtonGroup filters={filters} activedFilter={activedFilter} setActivedFilter={setActivedFilter} />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default FilterBar
