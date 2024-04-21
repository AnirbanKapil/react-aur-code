
import { useState } from "react"


function App() {

  let [counter,setCounter] = useState(0);
  
function increment () {
     if(counter == 20) return; 
     setCounter(counter + 1);
}

function decrement () {
  if(counter == 0 ) return
  setCounter(counter -1);
}

  return (
    
      <div> 
       <h1>{counter}</h1>
       <button onClick={increment}>Increase</button>
       <button onClick={decrement}>Decrease</button>
      </div>
  )
}

export default App
