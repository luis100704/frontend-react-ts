import { useState, useEffect } from 'react'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const [clicks, setClicks] = useState(0)
  const [message, setMessage] = useState('Cargando...')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

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
