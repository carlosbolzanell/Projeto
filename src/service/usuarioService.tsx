import { UserType } from '@/types/UserType';
import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create()

axiosClient.defaults.baseURL = 'http://localhost:8082/user'

export async function userRegister(payload: any) {
    const response: AxiosResponse<string> = await axiosClient.post('/create', payload).then(response => response)
    return response.data
}
