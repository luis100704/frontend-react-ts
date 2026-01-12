import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const [clicks, setClicks] = useState(0)

  function handleClick() {
    setClicks(clicks + 1)
  }

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
    </div>
  )
}

export default App
