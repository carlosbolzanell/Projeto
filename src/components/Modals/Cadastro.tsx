'use client'
import { Button, Input } from '@nextui-org/react'
import React, { SetStateAction, useEffect, useState } from 'react'
import { postRequests } from '@/service/usuarioService'
import { UserType } from '@/types/UserType'

interface CadastroProps{
    setModalState: React.Dispatch<SetStateAction<boolean>>
}

export default function Cadastro({setModalState}: CadastroProps) {

    const [userName, setUserName] = useState<string>("")
    const [userEmail, setUserEmail] = useState<string>("")
    const [userPassword, setUserPassword] = useState<string>("")

    const [openModal, setOpenModal] = useState<boolean>(true)

    useEffect(()=>{
        setModalState(openModal)
    },[openModal])

    const sendUser = () => {
        const user: UserType = {
            nome: userName,
            email: userEmail,
            senha: userPassword
        }
        postRequests("", user)
        setOpenModal(false)
    }

    return (
        <div className='absolute'>
            <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={()=>setOpenModal(false)}></div>
            <div className={`fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}>
                <section className='flex flex-col items-center bg-cyan-200 rounded-xl'>
                    <h1 className='text-2xl font-outfit mt-3'>Cadastro</h1>
                    <div className='w-[90%] my-3 flex flex-col gap-3'>
                        <Input
                            label='Digite seu nome'
                            onChange={(e) => setUserName(e.target.value)} />

                        <Input
                            type={'email'}
                            label='Digite seu email'
                            onChange={(e) => setUserEmail(e.target.value)} />

                        <Input
                            type={'password'}
                            label='Digite sua senha'
                            onChange={(e) => setUserPassword(e.target.value)} />

                        <Button onClick={() => sendUser()} >Cadastro</Button>
                    </div>
                </section>
            </div>
        </div>
    )
}
