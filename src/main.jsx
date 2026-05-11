import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // Add this line
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)