# Urban Threads (React)

Migración a React con React Router de las tres páginas principales: **Inicio**, **Productos** y **Contacto**.

## Cómo ejecutar
1. Asegúrate de tener Node 18+.
2. Instala dependencias:
   ```bash
   npm i
   ```
3. Ejecuta en desarrollo:
   ```bash
   npm run dev
   ```
4. Abre la URL que te muestra Vite (normalmente http://localhost:5173).

## Estructura
```text
src/
  components/
    Footer.jsx
    Navbar.jsx
  pages/
    Contact.jsx
    Home.jsx
    Products.jsx
  App.jsx
  main.jsx
  styles.css
```

> Los enlaces del footer son visuales (no navegan a páginas reales). El formulario de Contacto es de demostración y no envía datos.
