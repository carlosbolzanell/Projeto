'use client'
import { toast } from '@/components/ui/use-toast';
import { getTweetsFeed } from '@/service/tweetsService'
import { FeedType } from '@/types/TweetType';
import React, { useEffect, useState } from 'react'

export default function Feed() {

    const [feed, setFeed] = useState<FeedType>()

    useEffect(() => {
        getFeed()
    }, [])

    const getFeed = async () => {
        try {
            const response = await getTweetsFeed();
            setFeed(response)
        }catch(err){
            toast({
                title: "Unauthorized for this page!",
                variant: "destructive"
            })
        }
    }

    return (
        <main>
            <section className='my-10'>
                <h1 className='text-center font-outfit text-lg'>Feed</h1>
            </section>
            <section>
                {feed?.feedItems.map((tweet) => (
                    <div key={tweet.tweetId}>
                        <h1>{tweet.username}</h1>
                        <p>{tweet.content}</p>
                    </div>
                ))}
            </section>
        </main>
    )
}
