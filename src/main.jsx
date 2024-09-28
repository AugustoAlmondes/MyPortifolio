import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import Header from './page/Header'
import IC from './page/IC'
import BemVindo from './page/BemVindo'
import Projetos from './page/Projetos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <BemVindo/>
    <Projetos/>
    <IC/>
    
  </StrictMode>,
)
