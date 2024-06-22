'use client'
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { postRequests } from '../../service/usuarioService'

interface User{
    id?: number
    nome: string,
    email: string,
    senha: string
}

export default function Cadastro() {

    const [userName, setUserName] = useState<string>("")
    const [userEmail, setUserEmail] = useState<string>("")
    const [userPassword, setUserPassword] = useState<string>("")

    const sendUser = () =>{
        const user: User = {
            nome: userName,
            email: userEmail,
            senha: userPassword
        }
        postRequests("/usuario", user)
    }

    return (
        <main className='flex items-center justify-center'>
            <section className='flex flex-col items-center bg-cyan-200 w-[30%] rounded-xl'>
                <h1 className='text-2xl font-outfit mt-3'>Cadastro</h1>
                <div className='w-[90%] my-3 flex flex-col gap-3'>
                    <Input 
                    label='Digite seu nome' 
                    onChange={(e)=>setUserName(e.target.value)}/>

                    <Input 
                    type={'email'} 
                    label='Digite seu email' 
                    onChange={(e)=>setUserEmail(e.target.value)}/>

                    <Input 
                    type={'password'} 
                    label='Digite sua senha' 
                    onChange={(e)=>setUserPassword(e.target.value)}/>

                    <Button onClick={()=>sendUser()} >Cadastro</Button>
                </div>
            </section>
        </main>
    )
}
