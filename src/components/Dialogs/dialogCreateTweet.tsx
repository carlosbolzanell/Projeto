import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { createTweer } from '@/service/tweetsService';
import { toast } from '../ui/use-toast';
import { IoSend } from "react-icons/io5";
import { DialogClose } from '@radix-ui/react-dialog';

export default function DialogCreateTweet() {

    const sendTweet = async (e: FormData) => {
        const object = Object.fromEntries(e);
        try {
            const tweetResponse = await createTweer(object)
            toast({
                title: tweetResponse
            })
        } catch {
            toast({
                title: "Something is wrong!",
                variant: "destructive"
            })
        }
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger className='bg-blue-400 px-5 py-2 rounded-md font-poppins'>Create a Tweet</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>What is happening?!</DialogTitle>
                    </DialogHeader>
                    <form action={sendTweet} className='flex items-center gap-2'>
                        <Input placeholder='Type...' name='content' />
                        <DialogClose>
                            <Button variant={'medium'} type='submit' className='h-12'><IoSend /></Button>
                        </DialogClose>
                    </form>
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
