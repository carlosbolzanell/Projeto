'use client'
import { Button, Input } from '@nextui-org/react'
import React, { ChangeEvent, SetStateAction, useEffect, useState } from 'react'
import { postRequests } from '@/service/usuarioService'
import { UserType } from '@/types/UserType'
import CadastroPet from './CadastrarPet'
import CadastrarPet from './CadastrarPet'
import { PetType } from '@/types/PetType'

interface CadastroProps {
    setModalState: React.Dispatch<SetStateAction<boolean>>
}

export default function Cadastro({ setModalState }: CadastroProps) {

    const [userName, setUserName] = useState<string>("")
    const [userEmail, setUserEmail] = useState<string>("")
    const [userPassword, setUserPassword] = useState<string>("")

    const [invalid, setInvalid] = useState<boolean>(false)
    const [openPet, setOpenPet] = useState<boolean>(false)
    const [pets, setPets] = useState<PetType[]>([])

    const [openModal, setOpenModal] = useState<boolean>(true)

    useEffect(() => {
        setModalState(openModal)
    }, [openModal])

    const sendUser = () => {
        const user: UserType = {
            nome: userName,
            email: userEmail,
            senha: userPassword,
            pets: pets
        }
        if(userName == '' || userEmail == '' || userPassword == ''){
            setInvalid(true)
            return
        }
        postRequests("", user)
        setOpenModal(false)
    }

    return (
        <div className='absolute'>
            <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
            <div className={`fixed w-[40%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}>
                <section className='flex flex-col items-center bg-cyan-200 rounded-xl'>
                    <h1 className='text-2xl font-outfit mt-3'>Cadastro</h1>
                    <div className='w-[90%] my-3 flex flex-col gap-3'>
                        <Input
                            label='Digite seu nome'
                            onChange={(e) => setUserName(e.target.value)}
                            color={`${invalid && userName == '' ? 'danger': 'default'}`}
                            errorMessage='Nome inválido'
                            isInvalid={invalid && userName == ''} 
                        />

                        <Input
                            type={'email'}
                            label='Digite seu email'
                            onChange={(e) => setUserEmail(e.target.value)}
                            color={`${invalid && userEmail == '' ? 'danger': 'default'}`}
                            errorMessage='Email inválido'
                            isInvalid={invalid && userEmail == ''}
                        />

                        <Input
                            type={'password'}
                            label='Digite sua senha'
                            onChange={(e) => setUserPassword(e.target.value)}
                            color={`${invalid && userPassword == '' ? 'danger': 'default'}`}
                            errorMessage='Senha inválida'
                            isInvalid={invalid && userPassword == ''} 
                        />
                        <div className='flex justify-center'>
                            <Button className='w-40 bg-red-800 text-white' onClick={()=>setOpenPet(true)}>Adicionar Pet</Button>
                        </div>
                        <Button variant='solid' color='success' onClick={() => sendUser()} >Cadastro</Button>
                    </div>
                </section>
            </div>
            {
                openPet && (
                    <CadastrarPet setModalState={setOpenPet} updatePets={setPets} petsUpdateds={pets}/>
                )
            }
        </div>
    )
}
