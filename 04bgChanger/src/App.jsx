import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")


  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-28 inset-x-0 px-8 rounded-full">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-full ">
          <button
          onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}>
             RED </button>
             <button
             onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}>
             GREEN </button>
             <button
             onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}>
             BLUE </button>
             <button
             onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"purple"}}>
             PURPLE </button>
             <button
             onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"pink"}}>
             PINK </button>
             <button
             onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"grey"}}>
             GREY </button>
             <button
             onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"orange"}}>
             ORANGE </button>
             
        </div>
      </div>
    </div>
    

  )
}

export default App
