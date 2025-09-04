import React from 'react'

export default function Contact() {
  return (
    <section className="contact">
      <h2>CONTACTO</h2>
      <p>¿Tienes alguna pregunta? Nos encantaría escucharte</p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>INFORMACIÓN DE CONTACTO</h3>
          <div className="info-pair">
            <strong>DIRECCIÓN</strong>
            <p>Calle Urban Style 123<br/>28001 Madrid, España</p>
          </div>
          <div className="info-pair">
            <strong>TELÉFONO</strong>
            <p>+34 91 123 45 67</p>
          </div>
          <div className="info-pair">
            <strong>EMAIL</strong>
            <p>info@urbanthreads.com</p>
          </div>
          <div className="info-pair">
            <strong>HORARIO</strong>
            <p>Lun - Vie: 9:00 - 18:00<br/>Sáb: 10:00 - 14:00</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
          <p className="demo-note">Demo: Este es un formulario de demostración. Los mensajes no se enviarán realmente.</p>
          <div className="field">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" required />
          </div>
          <div className="field">
            <label>Apellidos</label>
            <input type="text" placeholder="Tus apellidos" required />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="tucorreo@ejemplo.com" required />
          </div>
          <div className="field">
            <label>Asunto</label>
            <select defaultValue="">
              <option value="" disabled>Selecciona un asunto</option>
              <option>Consulta general</option>
              <option>Información de producto</option>
              <option>Estado de pedido</option>
              <option>Devoluciones</option>
              <option>Otro</option>
            </select>
          </div>
          <div className="field">
            <label>Mensaje</label>
            <textarea rows="5" placeholder="Cuéntanos en qué te ayudamos" required />
          </div>
          <button className="btn" type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}
