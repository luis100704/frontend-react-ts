import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

type Props = {
    children: React.ReactNode
}

function ProtectedContent({ children }: Props) {
    const auth = useContext(AuthContext)

    if (!auth || !auth.user) {
        return <p>Debes iniciar sesión para ver este contenido</p>
    }

    return <>{children}</>
}

export default ProtectedContent