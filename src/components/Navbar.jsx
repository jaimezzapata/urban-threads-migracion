import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">URBAN THREADS</div>
        <nav className="links">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink>
          <NavLink to="/productos" className={({isActive}) => isActive ? 'active' : ''}>Productos</NavLink>
          <NavLink to="/contacto" className={({isActive}) => isActive ? 'active' : ''}>Contacto</NavLink>
        </nav>
      </div>
    </header>
  )
}
