'use client'
import { Button } from '@/components/ui/button'
import { parseCookies } from 'nookies'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const router = useRouter()
  const searchParams = useSearchParams();

  const [isAuth, setIsAuth] = useState<boolean>(false)

  useEffect(() => {
      const { 'twitter.token': token } = parseCookies();
      if (token) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
  }, [searchParams])

  return (
    <header className='bg-blue-500 h-16'>
      <div className='w-[90%] h-full m-auto flex flex-row justify-between items-center'>
        <div className='text-white'>
          logo
        </div>
        <div className={`${isAuth ? "hidden" : "!flex"} flex-row gap-4 font-poppins`}>
          <Button className='bg-lime-200' onClick={() => router.push('login')}>Login</Button>
          <Button className='bg-lime-200' onClick={() => router.push('cadastro')}>Cadastro</Button>
        </div>
        <div className={`${isAuth ? "!flex" : "hidden"} w-12 h-12 rounded-full items-center justify-center cursor-pointer`}>
          <FaUserCircle size={35} onClick={()=>router.push("perfil")}/>
        </div>
      </div>
    </header>
  )
}
