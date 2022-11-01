import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//import ErrorBoundary from './ErrorBoundary'
import App from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render ( 
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
) 