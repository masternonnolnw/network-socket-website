import { AccordionTrigger } from '@/common/components/base/Accordion'
import Typography from '@/common/components/base/Typography'

const FilterTitle = () => {
  return (
    <AccordionTrigger className="py-0">
      <div className="flex flex-row w-full h-fit gap-2 items-center pr-2">
        <Typography variant="h5" fontWeight="bold">
          กรองผลลัพธ์ตามแท็ก
        </Typography>
      </div>
    </AccordionTrigger>
  )
}

export default FilterTitle
