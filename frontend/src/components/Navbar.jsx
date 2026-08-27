import { useState } from 'react'
import '../styles/navbar.css'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <>
      <nav className="navbar">
        <button
          className="navbar-menu-button"
          onClick={() => setMenuAbierto(true)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <span className="navbar-logo">HCM LAB</span>
      </nav>

      <aside className={`sidebar ${menuAbierto ? 'sidebar-abierto' : ''}`}>
        <div className="sidebar-header">
          <strong>HCM LAB</strong>

          <button
            className="sidebar-close"
            onClick={() => setMenuAbierto(false)}
            aria-label="Cerrar menú"
          >
            ×
          </button>
        </div>

        <nav className="sidebar-links">
          <a href="#">Inicio</a>
          <a href="#">Proyectos</a>
          <a href="#">Sobre mí</a>
          <a href="#">Iniciar sesión</a>
        </nav>
      </aside>

      {menuAbierto && (
        <div
          className="sidebar-overlay"
          onClick={() => setMenuAbierto(false)}
        />
      )}
    </>
  )
}

export default Navbar