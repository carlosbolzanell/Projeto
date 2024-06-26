'use client'
import { Button, Input } from '@nextui-org/react'
import React, { SetStateAction, useEffect, useState } from 'react'
import { postRequests } from '@/service/petService'
import { PetType } from '@/types/PetType'
import { UserType } from '@/types/UserType'

interface CadastroPetProps {
    setModalState: React.Dispatch<SetStateAction<boolean>>
    petsUpdateds: PetType[]
    updatePets: React.Dispatch<SetStateAction<PetType[]>>
}

export default function CadastroPet({ setModalState, updatePets, petsUpdateds }: CadastroPetProps) {

    const [nome, setNome] = useState<string>("")
    const [idade, setIdade] = useState<number>()
    const [raca, setRaca] = useState<string>("")

    const [pets, setPets] = useState<PetType[]>(petsUpdateds)

    const [invalid, setInvalid] = useState<boolean>(false)

    const [openModal, setOpenModal] = useState<boolean>(true)

    useEffect(() => {
        setModalState(openModal)
    }, [openModal])

    useEffect(()=>{
        updatePets(pets)
    },[pets])

    const sendPet = () => {
        if(nome == '' || idade == 0 || raca == ''){
            setInvalid(true)
            return
        }
        const pet: PetType = {
            nome: nome,
            idade: idade!,
            raca: raca
            
        }
        setPets([...pets, pet])
        setOpenModal(false)
    }

    return (
        <div className='absolute'>
            <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
            <div className={`fixed w-[40%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}>
                <section className='flex flex-col items-center bg-cyan-200 rounded-xl'>
                    <h1 className='text-2xl font-outfit mt-3'>Cadastro Pet</h1>
                    <div className='w-[90%] my-3 flex flex-col gap-3'>
                        <Input
                            label='Digite o nome do Pet'
                            onChange={(e) => setNome(e.target.value)}
                            color={`${invalid && nome == '' ? 'danger': 'default'}`}
                            errorMessage='Nome inválido'
                            isInvalid={invalid && nome == ''} 
                        />

                        <Input
                            type={'number'}
                            label='Digite a idade'
                            onChange={(e) => setIdade(e.target.valueAsNumber)}
                            color={`${invalid && !idade ? 'danger': 'default'}`}
                            errorMessage='Email inválido'
                            isInvalid={invalid && !idade}
                        />

                        <Input
                            label='Digite a raça'
                            onChange={(e) => setRaca(e.target.value)}
                            color={`${invalid && raca == '' ? 'danger': 'default'}`}
                            errorMessage='Senha inválida'
                            isInvalid={invalid && raca == ''} 
                        />
                        <Button variant='solid' color='success' onClick={() => sendPet()} >Adicionar</Button>
                    </div>
                </section>
            </div>
        </div>
    )
}
