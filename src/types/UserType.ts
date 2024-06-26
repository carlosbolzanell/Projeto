import { PetType } from "./PetType"

export interface UserType {
    id?: number,
    image?: Blob | null
    nome: string,
    email: string,
    senha: string,
    pets: PetType[]
}