import { useEffect } from 'react'

import userStore from '../user-store'

const requireRegister = () => {
  const initUser = userStore((state) => state.initUser)
  const isUserInit = userStore((state) => state.isUserInit)
  const isRegister = userStore((state) => state.isRegister)
  if (isUserInit && !isRegister) window.location.href = '/register'

  useEffect(() => {
    initUser()
  }, [])
}

export default requireRegister
