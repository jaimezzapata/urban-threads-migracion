import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>URBAN THREADS</h3>
          <p>Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.</p>
        </div>
        <div>
          <h4>ENLACES</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4>AYUDA</h4>
          <ul>
            <li><a href="#" onClick={(e)=>e.preventDefault()}>Guía de tallas</a></li>
            <li><a href="#" onClick={(e)=>e.preventDefault()}>Envíos</a></li>
            <li><a href="#" onClick={(e)=>e.preventDefault()}>Devoluciones</a></li>
            <li><a href="#" onClick={(e)=>e.preventDefault()}>FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>SÍGUENOS</h4>
          <p>© 2024 Urban Threads. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
