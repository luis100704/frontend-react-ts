import { createContext, useState } from "react";

type AuthContextType = {
    user: string | null
    login: (username: string) => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

type AuthProvidersProps = {
    children: React.ReactNode
}

export function AuthProvider({ children }: AuthProvidersProps) {
    const [user, setUser] = useState<string | null>(null)

    function login(username:string) {
        setUser(username)
    }

    function logout() {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
