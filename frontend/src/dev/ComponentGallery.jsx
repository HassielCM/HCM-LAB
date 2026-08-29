import AuthCard from '../components/AuthCard.jsx'
import Button from '../components/Button.jsx'

function ComponentGallery() {
  const ruta = window.location.pathname
  
    if (ruta === '/components/authcard') {
      return <AuthCard />
    }

  if (ruta === '/components/button') {
    return <Button>Click me</Button>
  }

  if (ruta === '/components') {
    return (
      <>
        <h1>Galería de componentes</h1>

        <button onClick={() => (window.location.pathname = '/components/authcard')} >
          Ver AuthCard
        </button>

        <button onClick={() => (window.location.pathname = '/components/button')} >
          Ver Button
        </button>
        
      </>
    )
  }

  return <h1>Componente no encontrado</h1>
}

export default ComponentGallery