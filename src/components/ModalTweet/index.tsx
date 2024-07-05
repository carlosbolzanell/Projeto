'use client'
import { createTweer } from '@/service/tweetsService'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { toast } from '../ui/use-toast'

interface ModalProps {
    openParams: Dispatch<SetStateAction<boolean>>
}

export default function Modal({ openParams }: ModalProps) {

    const [open, setOpen] = useState<boolean>(true)

    const sendTweet = async (e: FormData) => {
        const object = Object.fromEntries(e);
        try {
            const tweetResponse = await createTweer(object)
            toast({
                title: tweetResponse
            })
        }catch{
            toast({
                title: "Something is wrong!",
                variant: "destructive"
            })
        }
    }

    useEffect(() => {
        openParams(open)
    }, [open])

    return (
        <div className='relative'>
            <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundoModal' onClick={() => setOpen(false)}></div>
            <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:w-[35%] w-[60%] rounded-lg bg-blue-200 h-44`}>
                <div className='font-poppins pt-4'>
                    <h1 className='text-center mb-4'>What is Happening?</h1>
                    <form action={sendTweet}>
                        <div className='w-[80%] m-auto'>
                            <Input 
                                placeholder='Type'
                                name='content'
                             />
                        </div>
                        <div className='flex justify-center my-4'>
                            <Button variant={"medium"} type="submit" onClick={()=>setOpen(false)}>Send</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
