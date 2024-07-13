export interface UserType{
    id?: number
    username: string
    email: string
    password: string
    role?: RoleType[]
}

export interface RoleType{
    id?: number
    name: string
}

export interface UserResponse{
    username: string
    email: string
}

export interface signInData{
    username: string,
    password: string
}