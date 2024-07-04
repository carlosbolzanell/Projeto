import { FeedType } from '@/types/TweetType';
import { AxiosResponse } from 'axios';
import { api } from "./api"

export async function getTweetsFeed() {
    const response: AxiosResponse<FeedType> = await api.get('/tweet/feed').then(response => response)
    return response.data
}