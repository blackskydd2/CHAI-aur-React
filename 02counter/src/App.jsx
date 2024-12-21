import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  // let counter = 5
  const [counter, setCounter] = useState(10)
  const addValue = () =>{
    setCounter(counter + 1)

  }

  const removeValue = () =>{
    setCounter(counter - 1)
   } 

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter Value : {counter}</h2>

    <button
    onClick = {addValue}> Add Value</button>
    <br />
    <button
    onClick={removeValue}>
      Decrease Value</button>
  
    </>
  )
}

export default App
