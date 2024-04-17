'use client'

import Button from '@/common/components/base/Button'
import Typography from '@/common/components/base/Typography'
import requireRegister from '@/common/stores/user/hooks/requireRegister'

const LandingPage = () => {
  requireRegister()

  return (
    <div className="flex flex-col w-full h-fit px-[190px] py-[50px]">
      <Typography variant="h1">Banana</Typography>
      <Button>test</Button>
    </div>
  )
}

export default LandingPage
