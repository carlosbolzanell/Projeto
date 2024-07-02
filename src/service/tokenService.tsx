import { TokenType } from '@/types/TokenType';
import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create()

axiosClient.defaults.baseURL = 'http://localhost:8082'

export async function loginUser(payload: any) {
    const response: AxiosResponse<TokenType> = await axiosClient.post('/login', payload).then(response => response)
    return response.data
}