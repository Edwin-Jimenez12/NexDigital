import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ScrollToHash from './components/ScrollToHash.jsx'

// Activa las animaciones de aparición solo cuando JavaScript está disponible
document.documentElement.classList.add('js')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
