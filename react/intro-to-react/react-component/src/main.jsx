import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JsxComponent from './component-lesson/JsxComponent.jsx'
import UsingReactComponent from './component-lesson/UsingReactComponent.jsx'
import App from './App.jsx'
import ShowCharacters from './ShowCharacters.jsx'
import ShowBasketballTeam from './ShowBasketballTeam.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ShowBasketballTeam/>
  </StrictMode>,
)
// <> in XML 是写自己的element
