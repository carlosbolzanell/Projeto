"use client"
import { Button } from '@/components/ui/button'
import { getUser } from '@/service/usuarioService'
import { UserType } from '@/types/UserType'
import { useRouter } from 'next/navigation'
import { destroyCookie } from "nookies"
import React, { useEffect, useState } from 'react'

export default function Perfil() {

    const router = useRouter()
    const [user, setUser] = useState<UserType>()

    const getUserLog = async () => {
        const userAuth = await getUser();
        if (userAuth) {
            setUser(userAuth)
        }
    }

    const logout = () => {
        destroyCookie(undefined, "twitter.token")
        router.push("/login")
    }

    useEffect(() => {
        getUserLog()
    }, [])

    return (
        <main className='w-[90%] m-auto'>

            <section className='my-5 font-poppins text-2xl'>
                <div className='flex flex-row justify-between items-center'>
                    <h1>Perfil</h1>
                    <Button variant={"medium"} onClick={logout}>Logout</Button>
                </div>
                <div className='border-t border-slate-300 mt-2'></div>
            </section>

            <h1>Nome: {user?.username}</h1>
            <h1>E-mail: {user?.email}</h1>

        </main>
    )
}
