import { createContext, useState } from "react";

export type AuthContextType = {
    token: string | null
    login: (token: string) => void
    logout: () => void
}

//Creación de un canal global llamado AuthContext que contendrá información de autenticación.
export const AuthContext = createContext<AuthContextType>({
    token: null,
    login: () => {},
    logout: () => {},
  })
  

type AuthProvidersProps = {
    children: React.ReactNode
}

export function AuthProvider({ children }: AuthProvidersProps) {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem('token')
    )

    function login(newToken:string) {
        setToken(newToken)
        localStorage.setItem('token', newToken)
    }

    function logout() {
        setToken(null)
        localStorage.removeItem('token')
    }

    return (
        //Todo lo que esté dentro de este Provider podrá acceder a user, login y logout.
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
