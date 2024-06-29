import { Button, Input } from '@nextui-org/react'
import React from 'react'

export default function Login() {
  return (
    <main className=' items-center'>
            <div className='w-[30%] font-poppins flex flex-col items-center border rounded-2xl border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='w-full h-full rounded-2xl absolute bg-blue-500'></div>
                <div className='w-[90%] flex flex-col items-center z-50 my-6'>
                    <h1 className='text-white font-bold mb-4 text-xl'>Login</h1>
                    <div className='w-[90%] flex flex-col gap-8'>
                        <Input
                            label='Login'
                            variant='flat'
                        />
                        <Input
                            label='Senha'
                            type={'password'}
                            variant='flat'
                        />
                        <Button className='bg-lime-200'>Login</Button>
                    </div>
                </div>
            </div>
        </main>
  )
}
