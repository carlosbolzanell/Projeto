import { UserType } from "./UserType";

export interface TweetType{
    tweetId: number
    username: string
    content: string
}

export interface FeedType{
    feedItems: TweetType[]
    page: number
    pageSize: number
    totalPages: number
    totalElements: number
}