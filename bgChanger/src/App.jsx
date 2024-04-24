import { useState } from "react"


function App() {
   
  const [color,setColor] = useState("white");

  return (
     <div className="w-full h-screen duration-200" 
       style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
      <div className="flex flex-wrap gap-3 shadow-xl rounded-lg py-2 px-2 bg-white"> 
      <button 
      className="outline-none px-4 bg-red-800 rounded-xl text-white shadow-lg" 
      onClick={()=>{setColor("red")}}>Red
      </button>
      <button 
      className="outline-none px-4 bg-green-800 rounded-xl text-white shadow-lg"
      onClick={()=> setColor("green")}>Green
      </button>
      <button 
      className="outline-none px-4 bg-blue-800 rounded-xl text-white shadow-lg"
      onClick={()=> setColor("blue")}>Blue
      </button>
      <button 
      className="outline-none px-4 bg-yellow-300 rounded-xl text-white shadow-lg"
      onClick={()=> setColor("yellow")}>Yellow
      </button>
      <button 
      className="outline-none px-4 bg-orange-400 rounded-xl text-white shadow-lg"
      onClick={()=> setColor("orange")}>Orange
      </button>
      <button
      className="outline-none px-4 bg-white rounded-xl text-black shadow-lg"
      onClick={()=> setColor("white")}>Default
      </button>
      </div>
       </div>
     </div>
  )
}

export default App
