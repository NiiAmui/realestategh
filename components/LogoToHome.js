'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { isLoggedIn } from '@/redux/features/auth'

const LogoToHome = () => {
const router = useRouter()
const loginStatus = useSelector(isLoggedIn)

const rerouteHome = ()=>{
  if(isLoggedIn){
    router.push('/rentals')
  }else{
    router.push('/')
  }
}

  return (
    <div onClick={()=>rerouteHome()} className='cursor-pointer'>Logo</div>
  )
}

export default LogoToHome