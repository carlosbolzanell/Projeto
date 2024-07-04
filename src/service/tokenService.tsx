import { TokenType } from '@/types/TokenType';
import { UserResponse } from '@/types/UserType';
import { AxiosResponse } from 'axios';
import { api } from './api'

export async function loginUser(payload: any) {
    const response: AxiosResponse<TokenType> = await api.post('/login', payload).then(response => response)
    return response.data
}

export async function getUserByToken() {
    const response: AxiosResponse<UserResponse> = await api.get('/getUser').then(response => response)
    return response.data
}