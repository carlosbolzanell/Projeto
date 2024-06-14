import { patchRequests } from '@/service/usuarioService'
import { Button, Input } from '@nextui-org/react'
import React, { SetStateAction, useEffect, useState } from 'react'

interface EditEmailProps{
    email: string
}

interface EditarProps{
    id: number
    emailProps: string
    setModalState: React.Dispatch<SetStateAction<boolean>>
}

export default function Editar({id, emailProps, setModalState}: EditarProps) {

    const [userEmail, setUserEmail] = useState<string>(emailProps)
    const [openModal, setOpenModal] = useState<boolean>(true)

    const updateUser = async () =>{
        const newUserEmail: EditEmailProps = {
            email: userEmail
        }
        await patchRequests(id.toString(), newUserEmail)
        setModalState(false)
    }

    useEffect(()=>{
        setModalState(openModal)
    },[openModal])

    return (
        <div className='absolute'>
            <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={()=>setOpenModal(false)}></div>
            <div className={`fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}>
                <section className='flex flex-col items-center bg-cyan-200 rounded-xl'>
                    <h1 className='text-2xl font-outfit mt-3'>Cadastro</h1>
                    <div className='w-[90%] my-3 flex flex-col gap-3'>
                        <Input
                            type={'email'}
                            label='Digite seu email'
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)} />

                        <Button onClick={() => updateUser()} >Salvar Alterações</Button>
                    </div>
                </section>
            </div>
        </div>
    )
}
