import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import Footer from './App/Footer'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './App/Navbar'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
    
    <Navbar></Navbar>
    <App />
     <Footer></Footer>
    </BrowserRouter>
   
   
   
  </StrictMode>,
)
