
type User = {
    id: number
    name: string
    email: string
  }
  
  type UserListProps = {
    users: User[]
    loading: boolean
    error: string
  }
  
  function UserList({ users, loading, error }: UserListProps) {
    if (loading) {
      return <p>Cargando usuarios...</p>
    }
  
    if (error) {
      return <p style={{ color: 'red' }}>{error}</p>
    }
  
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} – {user.email}
          </li>
        ))}
      </ul>
    )
  }
  
  export default UserList
  