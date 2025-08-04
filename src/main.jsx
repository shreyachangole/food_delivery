import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import UserContex from './contex/UserContex.jsx'

createRoot(document.getElementById('root')).render(
     <UserContex>
      <App />
</UserContex> 

);
