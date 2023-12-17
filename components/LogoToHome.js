import React from 'react'
import { useRouter } from 'next/navigation'

const LogoToHome = () => {
const router = useRouter()

  return (
    <div onClick={()=>router.push('/')} className='cursor-pointer'>Logo</div>
  )
}

export default LogoToHome