import { useEffect, useState } from 'react'

type User = {
  id: number
  name: string
  email: string
}

function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [usersError, setUsersError] = useState('')

  useEffect(() => {
    setLoading(true)
    setUsersError('')

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar usuarios')
        }
        return response.json()
      })
      .then((data) => {
        setUsers(data)
      })
      .catch(() => {
        setUsersError('No se pudieron cargar los usuarios')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { users, loading, usersError }
}

export default useUsers
