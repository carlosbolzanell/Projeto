import { FeedType, TweetType } from '@/types/TweetType';
import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create()

axiosClient.defaults.baseURL = 'http://localhost:8082/tweet'

export async function getTweetsFeed() {
    const response: AxiosResponse<FeedType> = await axiosClient.get('/feed').then(response => response)
    return response.data
}