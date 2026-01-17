import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

type User = {
  id: number
  username: string
  email: string
}

function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [usersError, setUsersError] = useState('')
  const { token } = useContext(AuthContext)

  useEffect(() => {
    if (!token) return
  
    setLoading(true)
    setUsersError('')
  
    fetch('http://127.0.0.1:8000/api/users/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error()
        }
        return response.json()
      })
      .then((data) => {
        setUsers(data)
      })
      .catch(() => {
        setUsersError('Error al cargar usuarios')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [token])
  

  return { users, loading, usersError }
}

export default useUsers
