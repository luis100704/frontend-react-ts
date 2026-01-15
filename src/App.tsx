import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Card from './components/ui/Card'
import UserList from './components/users/UserList'
import useUsers from './hooks/useUsers'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import ProtectedContent from './components/layout/ProtectedContent'

function App() {
  const [clicks, setClicks] = useState(0)
  const [message, setMessage] = useState('Cargando...')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const { users, loading, usersError } = useUsers()

  const auth = useContext(AuthContext)

  if (!auth) {
    return null
  }

  const { user, login, logout } = auth

  function handleClick() {
    setClicks(clicks + 1)
  }

  function handleSubmit() {
    if (name.trim() === '') {
      setError('El nombre no puede estar vacío')
      return
    }

    setError('')
    alert(`Nombre enviado: ${name}`)
    setName('')
  }

  useEffect(() => {
    console.log('La aplicación se ha cargado')
  }, [])

  useEffect(() => {
    console.log('Clicks actualizados:', clicks)
  }, [clicks])  
  
  useEffect(() => {
    setTimeout(() => {
      setMessage('Datos cargados correctamente')
    }, 1500)
  }, [])
  
  return (
    <div>
      <Header />

      {user ? (
        <div>
          <p>Usuario logueado: {user}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ): (
        <button onClick={() => login(name)}>Login</button>
      )}

      <p>Clicks: {clicks}</p>

      <button onClick={handleClick}>
        Haz click
      </button>

      <div>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit}>
        Enviar
      </button>

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
        clicks={clicks}
      />

      <Card
        title="Backend"
        description="API con Django y Django REST Framework"
        clicks={clicks}
      />

      <p>{message}</p>

    </div>
  )
}

export default App
