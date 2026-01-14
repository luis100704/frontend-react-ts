import { useState, useEffect } from 'react'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const [clicks, setClicks] = useState(0)
  const [message, setMessage] = useState('Cargando...')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

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
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      setUsers(data)
    })
  }, [])
  
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

      <h2>Usuarios</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

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
