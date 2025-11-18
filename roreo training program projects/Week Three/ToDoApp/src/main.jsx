import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NaveBar from "./components/naveBar.jsx"
import './index.css'
import Board from './board.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <NaveBar />
       <Board />
    </div>
   
  </StrictMode>,
)
