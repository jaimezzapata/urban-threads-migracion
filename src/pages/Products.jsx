import React from 'react'

const items = [
  { title: 'Camiseta Básica Urban', desc: 'Algodón 100% orgánico', price: '€29' },
  { title: 'Jeans Slim Fit', desc: 'Denim premium stretch', price: '€89' },
  { title: 'Sudadera Oversize', desc: 'Algodón French Terry', price: '€65' },
  { title: 'Chaqueta Bomber', desc: 'Nylon resistente al agua', price: '€120' },
  { title: 'Gorra Snapback', desc: 'Bordado premium', price: '€35' },
  { title: 'Zapatillas Urban', desc: 'Suela de goma antideslizante', price: '€95' },
]

export default function Products() {
  return (
    <section className="products">
      <h2>NUESTRA COLECCIÓN</h2>
      <p>Estilo urbano para cada ocasión</p>
      <div className="grid">
        {items.map((it) => (
          <article key={it.title} className="card">
            <div className="img-placeholder" aria-hidden="true" />
            <h3>{it.title}</h3>
            <p className="muted">{it.desc}</p>
            <div className="price-row">
              <span className="price">{it.price}</span>
              <button className="btn-secondary" type="button">Añadir</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
