import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#0B0F19",
      color: "#fff",
      border: "1px solid #22d3ee",
    },
  }}
/>
  </StrictMode>,
)
