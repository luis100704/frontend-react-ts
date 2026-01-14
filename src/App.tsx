import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Card from './components/ui/Card'
import UserList from './components/users/UserList'

function App() {
  const [clicks, setClicks] = useState(0)
  const [message, setMessage] = useState('Cargando...')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  type User = {
    id: number
    name: string
    email: string
  }

  const [users, setUsers] = useState<User[]>([])

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

  useEffect(() => {
    setLoading(true)
    setApiError('')

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
        setApiError('No se pudieron cargar los usuarios')
      })
      .finally(() => {
        setLoading(false)
      })
  },  [])
  
  return (
    <div>
      <Header />

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
      {apiError && <p style={{ color: 'red' }}>{apiError}</p>}

      <h2>Usuarios</h2>

      <UserList
        users={users}
        loading={loading}
        error={apiError}
      />

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
