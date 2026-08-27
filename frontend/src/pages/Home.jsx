import Navbar from '../components/Navbar.jsx'
import '../styles/home.css'

function Home() {
  return (
    <>
      <Navbar />

      <main className="home">
        <h1>HCM LAB</h1>

        <p>
          Laboratorio personal de desarrollo,
          software e inteligencia artificial.
        </p>

        <button>Ver proyectos</button>
      </main>
    </>
  )
}

export default Home