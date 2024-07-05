import { FeedType } from '@/types/TweetType';
import { AxiosResponse } from 'axios';
import { api } from "./api"

export async function getTweetsFeed( page: number) {
    const response: AxiosResponse<FeedType> = await api.get(`/tweet/feed?page=${page}`).then(response => response)
    return response.data
}

export async function createTweer(payload: any) {
    const response: AxiosResponse<string> = await api.post(`/tweet/create`, payload).then(response => response)
    return response.data
}