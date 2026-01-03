import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RestProvider from './context/RestContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RestProvider>
      <App />
    </RestProvider>
    
  </StrictMode>,
)
