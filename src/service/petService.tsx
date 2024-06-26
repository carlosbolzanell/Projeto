import { PetType } from '@/types/PetType';
import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create()

axiosClient.defaults.baseURL = 'http://localhost:8082/pet'

export async function getRequests(URL:string) {
    const response: AxiosResponse<PetType[]> = await axiosClient.get(URL).then(response => response)
    return response.data
}

export async function postRequests(URL:string, payload: any): Promise<PetType> {
    const response: AxiosResponse<PetType> = await axiosClient.post(URL, payload)
    return response.data
}

export async function putRequests(URL:string, payload: any): Promise<PetType> {
    const response: AxiosResponse<PetType> = await axiosClient.put(URL, payload)
    return response.data
}

export async function patchRequests(URL:string, payload: any) {
    const response: AxiosResponse<PetType[]> = await axiosClient.patch(URL, payload)
    return response.data
}

export async function deleteRequests(URL:string) {
    const response: AxiosResponse<PetType[]> = await axiosClient.delete(URL)
    return response.data
}