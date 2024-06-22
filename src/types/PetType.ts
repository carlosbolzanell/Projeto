import { UserType } from "./UserType"

export interface PetType{
    nome: string
    dono: UserType
    idade: number
    raca: string
}