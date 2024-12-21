import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>build iN main</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https:google.com" target='_blank'> visit google</a>
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />

  </StrictMode>,
)
