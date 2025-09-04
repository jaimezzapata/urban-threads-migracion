import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Nav } from './components/nav'
import { PaginaPrincipal } from './pages/paginaPrincipal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <div className="pagina-p">
      <PaginaPrincipal />
    </div>
  </StrictMode>,
)
