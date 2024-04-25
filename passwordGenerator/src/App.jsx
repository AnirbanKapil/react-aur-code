import { useState,useCallback } from "react"


function App() {
  
  const [length,setLength] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*~";
      
    for(let i = 1 ; i <= array.length ; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass = str.charAt(char);
    }
    setPassword(pass);
        
  },[length,numAllowed,charAllowed,setPassword]);

  return (
    <div className="w-full h-screen" style={{backgroundColor : "black"}}>
      <h1 className="text-6xl text-center font-extralight">PassWord Generator</h1>
    </div>
  )
}

export default App
