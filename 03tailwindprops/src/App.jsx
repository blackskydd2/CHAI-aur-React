import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Card2 from './components/card2'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username : "Aayush",
    age : 21
  }

  let newArray = [1,2,3,8]

  return (
    <>
          <h1 className='bg-orange-500 text-black p-5 rounded-2xl '>Tailwind Test</h1>
          <Card userName ="chai aur code"  />
          <Card userName = "React Learning" btnText = "click me" />
          
    </>
  )
}

export default App
