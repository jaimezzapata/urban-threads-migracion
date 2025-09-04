import React from "react";
import "./nav.css";

export const Nav = () => {
  return (
      <nav className="navbar-menu">
        <h1>URBAN THREADS</h1>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
  );
};

export default Nav;
