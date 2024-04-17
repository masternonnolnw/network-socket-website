import Typography from '@/common/components/base/Typography'

const EmptyState = () => {
  return (
    <div className="flex w-full h-fit items-center justify-center py-4">
      <div className="flex flex-col items-center w-fit h-fit ">
        <img src="/assets/images/student-profile/assignment-empty.svg" className="w-[130px] h-[130px]" />
        <Typography variant="body1" className="text-medium">
          กรุณาติดต่อนิสิตเพื่อขอข้อมูลเพิ่มเติม
        </Typography>
      </div>
    </div>
  )
}

export default EmptyState
