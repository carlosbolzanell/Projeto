import axios from "axios"
import { headers } from "next/headers"
import { parseCookies } from 'nookies'

const { 'twitter.token': token} = parseCookies()

export const api = axios.create({
    baseURL: 'http://localhost:8082'
})

if(token){
    api.defaults.headers['Authorization'] = `Bearer ${token}`
}
