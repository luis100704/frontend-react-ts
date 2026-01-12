import Header from './components/Header'
import Card from './components/Card'

function App() {
  return (
    <div>
      <Header />

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
