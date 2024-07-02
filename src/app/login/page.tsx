'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { loginUser } from '@/service/tokenService'
import { TokenType } from '@/types/TokenType'
import { useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'

export default function Login() {
    const router = useRouter()
    const [token, setToken] = useState<TokenType>()

    useEffect(()=>{
        localStorage.setItem('token', JSON.stringify(token))
    }, [token])

    const login = async (e: FormData) =>{
        const rawFormData = Object.fromEntries(e)

        try{
            const response = await loginUser(rawFormData);
            setToken(response);
            router.push("/feed");  
        }catch(err){
            toast({
                title: "Credentials are not valids!",
                variant: "destructive"
            })
        }
        
    }

    return (
        <main className=' items-center'>
            <div className='w-[30%] flex flex-col items-center border rounded-2xl border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='w-full h-full rounded-2xl absolute bg-blue-500'></div>
                <div className='w-[90%] flex flex-col items-center z-50 my-6'>
                    <h1 className='text-white font-bold mb-4 font-outfit text-xl'>Login</h1>
                    <form action={login} className='w-[90%] flex flex-col gap-8'>
                        <Input
                            name='username'
                            placeholder='Login'
                        />
                        <Input
                            name='password'
                            placeholder='Senha'
                            type={'password'}
                        />
                        <Button className='bg-lime-200'>Login</Button>
                    </form>
                </div>
            </div>
        </main>
    )
}
