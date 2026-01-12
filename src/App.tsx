import { useState, useEffect } from 'react'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const [clicks, setClicks] = useState(0)
  const [message, setMessage] = useState('Cargando...')

  function handleClick() {
    setClicks(clicks + 1)
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
