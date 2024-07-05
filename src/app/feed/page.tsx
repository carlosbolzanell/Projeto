'use client'
import { toast } from '@/components/ui/use-toast';
import { getTweetsFeed } from '@/service/tweetsService'
import { FeedType } from '@/types/TweetType';
import { CiUser } from "react-icons/ci";
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import Modal from '@/components/ModalTweet';

export default function Feed() {

    const [open, setOpen] = useState<boolean>(false)
    const [feed, setFeed] = useState<FeedType>()
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        const getFeed = async () => {
            try {
                const response = await getTweetsFeed(page);
                setFeed(response)
            } catch (err) {
                toast({
                    title: "Unauthorized for this page!",
                    variant: "destructive"
                })
            }
        }

        getFeed()
    }, [open, feed])

    return (
        <main>
            <section>
                <h1 className='font-poppins text-center mt-4'>Select a Page</h1>
                <div className='flex flex-row items-center justify-center gap-3'>
                    <Button variant={"medium"} onClick={()=>setPage(0)}>1</Button>
                    <Button variant={"medium"} onClick={()=>setPage(1)}>2</Button>
                    <Button variant={"medium"} onClick={()=>setPage(2)}>3</Button>
                    <Button variant={"medium"} onClick={()=>setPage(3)}>4</Button>
                    <Button variant={"medium"} onClick={()=>setPage(4)}>5</Button>
                </div>
            </section>
            <section className='my-10'>
                <h1 className='text-center font-outfit text-lg'>Feed</h1>
            </section>
            <section className='flex justify-center mb-3'>
                <Button variant={"medium"} onClick={()=>setOpen(true)}>Create a tweet</Button>
            </section>
            <section className='flex items-center flex-col'>
                {feed?.feedItems.map((tweet) => (
                    <div key={tweet.tweetId} className="border border-slate-200 w-[40%] flex flex-row my-3 gap-2 pl-2 py-2">
                        <div className='w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center'>
                            <CiUser size={25}/>
                        </div>
                        <div>
                            <h1 className='font-poppins text-lg font-semibold'>{tweet.username}</h1>
                            <p className='font-poppins'>{tweet.content}</p>
                        </div>
                    </div>
                ))}
            </section>
            {
                open && (
                    <Modal openParams={setOpen}/>
                )
            }
        </main>
    )
}
