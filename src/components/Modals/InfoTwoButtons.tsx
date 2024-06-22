'use client'
import { Button } from '@nextui-org/react'
import React, { SetStateAction, useEffect, useState } from 'react'

interface InfoTwoButtonsProps{
    setModalState: React.Dispatch<SetStateAction<boolean>>
    setResponse: React.Dispatch<SetStateAction<boolean>>
}

export default function InfoTwoButtons({setModalState, setResponse}: InfoTwoButtonsProps) {

    const [openModal, setOpenModal] = useState<boolean>(true)
    const [yes, setYes] = useState<boolean>(false)

    useEffect(() => {
        setModalState(openModal)
    }, [openModal])

    useEffect(()=>{
        setResponse(yes)
    },[yes])

    return (
        <div className='absolute'>
            <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
            <div className={`fixed w-[20%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}>
                <section className='flex flex-col items-center justify-center gap-3 bg-red-500 h-44 rounded-lg'>
                    <h1 className='text-center font-poppins'>Você tem certeza que deseja remover?</h1>
                    <div className='flex flex-row gap-5'>
                        <Button onClick={()=>{
                            setYes(false)
                            setOpenModal(false)
                        }}>Não</Button>
                        <Button onClick={()=>{
                            setYes(true)
                            setOpenModal(false)
                        }}>Sim</Button>
                    </div>
                </section>
            </div>
        </div>
    )
}
