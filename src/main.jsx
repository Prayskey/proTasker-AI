import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <-- Step A: Import the browser tracking layer
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* <-- Step B: Wrap your root App node */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)