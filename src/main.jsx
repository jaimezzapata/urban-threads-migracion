import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  Home  from './pages/Home'
import  Contacto  from './pages/Contacto'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Contacto />
  </StrictMode>,
)
