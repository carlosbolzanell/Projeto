'use client'
import { toast } from '@/components/ui/use-toast';
import { getTweetsFeed } from '@/service/tweetsService'
import { FeedType } from '@/types/TweetType';
import { CiUser } from "react-icons/ci";
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import DialogCreateTweet from '@/components/Dialogs/dialogCreateTweet';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

export default function Feed() {

    const [feed, setFeed] = useState<FeedType>()
    const page = [0 ,1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
    const pagesAppear =  [-1 , 0, 1]
    const [pageNumber, setPageNumber] = useState<number>(0)

    useEffect(() => {
        const getFeed = async () => {
            try {
                const response = await getTweetsFeed(page[pageNumber]);
                setFeed(response)
            } catch (err) {
                toast({
                    title: "Unauthorized for this page!",
                    variant: "destructive"
                })
            }
        }

        getFeed()
    }, [feed])

    return (
        <main>
            <section className='my-10'>
                <h1 className='text-center font-outfit text-lg'>Feed</h1>
            </section>
            <section className='flex justify-center mb-3'>
                <DialogCreateTweet />
            </section>
            <section className='flex items-center flex-col'>
                {feed?.feedItems.map((tweet) => (
                    <div key={tweet.tweetId} className="border border-slate-200 w-[40%] flex flex-row my-3 gap-2 pl-2 py-2">
                        <div className='w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center'>
                            <CiUser size={25} />
                        </div>
                        <div>
                            <h1 className='font-poppins text-lg font-semibold'>{tweet.username}</h1>
                            <p className='font-poppins'>{tweet.content}</p>
                        </div>
                    </div>
                ))}
            </section>
            <Pagination>
                <PaginationContent>
                    <PaginationItem className={`${pageNumber == 0 ? "hidden" : "!block"}`}>
                        <PaginationPrevious onClick={()=>setPageNumber(pageNumber - 1)}/>
                    </PaginationItem>
                    
                    {
                        pagesAppear.map((num)=>(
                            <PaginationItem key={num}  className={`${pageNumber == 0 && num == -1 || pageNumber == 9 &&  num == 1 ? "hidden" : "!block"}`}>
                                <PaginationLink isActive={num == 0} onClick={()=>setPageNumber(page[pageNumber + num])}>{  pageNumber + (num + 1) }</PaginationLink>
                            </PaginationItem>
                        ))
                    }
                    <PaginationItem className={`${pageNumber == 9 ? "hidden" : "!block"}`}>
                        <PaginationNext onClick={()=>setPageNumber(pageNumber + 1)}/>
                    </PaginationItem>

                </PaginationContent>
            </Pagination>

        </main>
    )
}
