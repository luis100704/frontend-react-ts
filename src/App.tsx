import { useState, useContext } from 'react'
import Header from './components/layout/Header'
import Card from './components/ui/Card'
import UserList from './components/users/UserList'
import useUsers from './hooks/useUsers'
import { AuthContext } from './context/AuthContext'
import ProtectedContent from './components/layout/ProtectedContent'

function App() {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const { users, loading, usersError } = useUsers()
  const { token, login, logout } = useContext(AuthContext)

  async function handleLogin() {
    const response = await fetch('http://127.0.0.1:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,
        password: 'Luisao_2004',
      }),
    })

    const data = await response.json()

    if (data.access) {
      login(data.access)
    } else {
      setError('Login incorrecto')
    }
  }
  
  return (
    <div>
      <Header />

      {!token ? (
      <>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      </>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      {error && <p style={{ color: 'red'}}>{error}</p>}

      <p>Hola, {name}</p>

      {loading && <p>Cargando usuarios...</p>}
      {usersError && <p style={{ color: 'red' }}>{usersError}</p>}

      <ProtectedContent>
        <h2>Usuarios</h2>

        <UserList
        users={users}
        loading={loading}
        error={usersError}
        />
      </ProtectedContent>


      <Card
        title="Frontend"
        description="Aplicación React con TypeScript"
      />

      <Card
        title="Backend"
        description="API con Django y Django REST Framework"
      />

    </div>
  )
}

export default App
