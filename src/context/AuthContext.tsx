'use client'
import { setCookie, parseCookies } from "nookies"
import { getUserByToken, loginUser } from "@/service/tokenService";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useState, useContext, useEffect } from "react";
import { signInData, UserResponse } from "@/types/UserType";
import { api } from "@/service/api";
import { getTweetsFeed } from "@/service/tweetsService";

interface AuthContextData {
    isAuthenticated: boolean;
    signIn: (data: signInData) => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export default function AuthProvider({ children }: { children: ReactNode }) {
    const router = useRouter()
    const [user, setUser] = useState<UserResponse>()

    const isAuthenticated = !!user;

    useEffect(() => {

        const { 'twitter.token': token } = parseCookies()

        if (token) {
            getUserByToken().then(response => setUser(response));
        }

    }, [])

    const signIn = async (data: signInData) => {

        const { accessToken, expiresIn } = await loginUser(data);

        setCookie(undefined, "twitter.token", accessToken, {
            maxAge: expiresIn //1 hora!
        })
        api.defaults.headers['Authorization'] = `Bearer ${accessToken}`

        router.push('/feed')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);