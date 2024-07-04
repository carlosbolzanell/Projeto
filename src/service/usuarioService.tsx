import { AxiosResponse } from 'axios';
import { api } from "./api"

export async function userRegister(payload: any) {
    const response: AxiosResponse<string> = await api.post('user/create', payload).then(response => response)
    return response.data
}
