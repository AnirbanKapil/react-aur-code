import { useState,useCallback,useEffect,useRef } from "react"


function App() {
  
  const [length,setLength] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");


  const passwordRef = useRef(null);
  
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*~";
      
    for(let i = 0 ; i <= length ; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
        
  },[length,numAllowed,charAllowed,setPassword]);

  useEffect(()=>{
     passwordGenerator() 
  },[length,numAllowed,charAllowed,passwordGenerator])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    
      <div className="w-full max-w-screen-md h-[195px] shadow-md mt-20 mx-auto px-4 bg-gray-800 rounded-xl text-yellow-400">
        <h1 className="text-white my-3 text-center font-extralight">PassWord Generator</h1> 
        <div className="flex shadow-lg mt-10 rounded-lg overflow-hidden mb-9">
          <input
           type="text"
           value={password}
           className="outline-none w-full py-1 px-3 bg-slate-400"
           placeholder="password"
           readOnly
           ref={passwordRef}
          />
          <button
           onClick={copyPasswordToClipBoard}
           className="m-4 px-3 rounded-md  bg-blue-500 hover:bg-blue-600">COPY</button>
        </div>
        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-1">
             <input
             type="range"
             min={6}
             max={100}
             value={length}
             className="cursor-pointer"
             onChange={(e)=>{setLength(e.target.value)}}
              />
              <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
             <input 
             type="checkbox"
             defaultChecked={numAllowed}
             onChange={()=>{setNumAllowed((perValue)=> !perValue)}}
             />
             <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
             <input 
             type="checkbox"
             defaultChecked={numAllowed}
             onChange={()=>{setCharAllowed((perValue)=> !perValue)}}
             />
             <label>Characters</label>
          </div>
        </div>
      </div>
    
  )
}

export default App
