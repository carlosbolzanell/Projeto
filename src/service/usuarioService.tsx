import { UserType } from '@/types/UserType';
import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create()

axiosClient.defaults.baseURL = 'http://localhost:8082/usuario'

export async function getRequests(URL:string) {
    const response: AxiosResponse<UserType[]> = await axiosClient.get(URL).then(response => response)
    return response.data
}

export async function postRequests(URL:string, payload: any): Promise<UserType> {
    const response: AxiosResponse<UserType> = await axiosClient.post(URL, payload)
    return response.data
}

export async function putRequests(URL:string, payload: any): Promise<UserType> {
    const response: AxiosResponse<UserType> = await axiosClient.put(URL, payload)
    return response.data
}

export async function patchRequests(URL:string, payload: any) {
    const response: AxiosResponse<UserType[]> = await axiosClient.patch(URL, payload)
    return response.data
}

export async function deleteRequests(URL:string) {
    const response: AxiosResponse<UserType[]> = await axiosClient.delete(URL)
    return response.data
}