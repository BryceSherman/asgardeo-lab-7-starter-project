import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AsgardeoProvider } from '@asgardeo/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsgardeoProvider
      clientId="X5RjsM_zKHenZT4wwI4KjQQX7gIa"
      baseUrl="https://api.asgardeo.io/t/bryce"
    >
      <App />
    </AsgardeoProvider>
  </StrictMode>
)