export interface UserType{
    id?: number
    name: string
    email: string
    password: string
    role?: RoleType[]
}

export interface RoleType{
    id?: number
    name: string
}