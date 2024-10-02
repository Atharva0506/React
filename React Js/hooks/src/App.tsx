import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [password , setPassWord] = useState("")
  const [length , setLength] = useState(8)
  const [isNumber,setNumber] = useState(false)
  const [isSpecialChar,setSpeclalChar] = useState(false)

  const passwordRef = useRef<HTMLInputElement>(null)

  const passGen = useCallback(()=>{
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let pass = ""
    if(isNumber)  {str += "0123456789"} 
    if(isSpecialChar) {str += "@!~*&^%."}

    for(let i=1; i<=length;i++){
      
      pass += str.charAt(Math.floor(Math.random() * str.length + 1) )
    }
    setPassWord(pass)


  },[length,isNumber,isSpecialChar,setPassWord])

  const copyPass = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
    
  },[password])

  useEffect(()=>{
    passGen()
  },[passGen,length,isNumber,isSpecialChar])
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center   bg-black">
        <div className="w-full max-w-md h-max mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
          <h1 className="text-white text-center my-3 text-xl">Password generator</h1>
          <div className=" flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button className="outline-none bg-blue-700 text-white duration-150 px-3 py-0.5 shrink-0 hover:bg-slate-600 " onClick={copyPass}>
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                className="cursor-pointer"
                defaultValue={length}
                onChange={(e) => setLength(parseInt(e.target.value)) }
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          onChange={()=> setNumber((prev)=> !prev)}
          id="numberInput"
        
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              onChange={()=> setSpeclalChar((prev)=> !prev)}
              id="characterInput"
          />
          <label htmlFor="characterInput">Characters</label>
      </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
