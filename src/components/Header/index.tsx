'use client'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Header() {
  const router = useRouter()
  return (
    <header className='bg-blue-500 h-16'>
      <div className='w-[90%] h-full m-auto flex flex-row justify-between items-center'>
        <div className='text-white'>
          logo
        </div>
        <div className='flex flex-row gap-4 font-poppins'>
          <Button className='bg-lime-200' onPress={()=>router.push('login')}>Login</Button>
          <Button className='bg-lime-200' onPress={()=>router.push('cadastro')}>Cadastro</Button>
        </div>
      </div>
    </header>
  )
}
