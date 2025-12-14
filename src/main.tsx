import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import AboutSection from './App/About'
import WhyUsSection from './App/WhyUs'
import Footer from './App/Footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <AboutSection/>
    <WhyUsSection></WhyUsSection>
    <Footer></Footer>
   
  </StrictMode>,
)
