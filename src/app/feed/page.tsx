'use client'
import { toast } from '@/components/ui/use-toast';
import { getTweetsFeed } from '@/service/tweetsService'
import { FeedType } from '@/types/TweetType';
import { CiUser } from "react-icons/ci";
import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import DialogCreateTweet from '@/components/Dialogs/dialogCreateTweet';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

export default function Feed() {

    const [feed, setFeed] = useState<FeedType>()
    const page = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const pagesAppear = [-1, 0, 1]
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
                    <div key={tweet.tweetId} className="border border-slate-200 rounded-lg w-[40%] flex flex-col my-3">
                        <div className='flex flex-row gap-2 pl-2 py-2'>
                            <div className='w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center'>
                                <CiUser size={25} />
                            </div>
                            <div>
                                <h1 className='font-poppins text-lg font-semibold'>{tweet.username}</h1>
                                <p className='font-poppins'>{tweet.content}</p>
                            </div>
                        </div>
                        <div className='w-[90%] m-auto'>
                            <div className='border-t border-slate-200 '></div>
                            <div className='my-2 flex flex-row justify-center items-center gap-20 font-poppins'>
                                <div className='flex flex-row items-center gap-2'>
                                    <FaRegComment size={18} />
                                    <p>10</p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <HiOutlineArrowPathRoundedSquare size={20} />
                                    <p>30</p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <CiHeart size={24} />
                                    <p>120</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <Pagination className='cursor-pointer select-none'>
                <PaginationContent>
                    <PaginationItem className={`${pageNumber == 0 ? "hidden" : "!block"}`}>
                        <PaginationPrevious onClick={() => setPageNumber(pageNumber - 1)} />
                    </PaginationItem>

                    {
                        pagesAppear.map((num) => (
                            <PaginationItem key={num} className={`${pageNumber == 0 && num == -1 || pageNumber == 9 && num == 1 ? "hidden" : "!block"}`}>
                                <PaginationLink isActive={num == 0} onClick={() => setPageNumber(page[pageNumber + num])}>{pageNumber + (num + 1)}</PaginationLink>
                            </PaginationItem>
                        ))
                    }
                    <PaginationItem className={`${pageNumber == 9 ? "hidden" : "!block"}`}>
                        <PaginationNext onClick={() => setPageNumber(pageNumber + 1)} />
                    </PaginationItem>

                </PaginationContent>
            </Pagination>

        </main>
    )
}
