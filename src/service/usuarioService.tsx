import axios, { AxiosResponse } from 'axios';

const axiosClient = axios.create()

axiosClient.defaults.baseURL = 'http://localhost:8082/usuario'

export async function cadastroUsuario(payload: FormData) {
    const response = axios.post('/cadastro', payload).then(response => response)
}
