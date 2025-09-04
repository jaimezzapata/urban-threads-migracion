import React from "react";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <section id="inicio">Bienvenido</section>
      <section id="productos">Nuestros productos</section>
      <section id="contacto">Contáctanos</section>
    </div>
  );
}
