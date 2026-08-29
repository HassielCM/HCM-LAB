import Login from './pages/Login.jsx'
import ComponentGallery from './dev/ComponentGallery.jsx'

function App() {
  const ruta = window.location.pathname

  if (ruta.startsWith('/components')) {
    return <ComponentGallery />
  }

  return <Login />
}

export default App