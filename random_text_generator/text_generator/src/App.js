import { useState,useCallback } from 'react';
import './App.css';

function App() {
  const[length,setLength]=useState(8)
  const[numberAllowed,setNumbarAllowed]=useState(false)
  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")


  const passwordGenerator = useCallback(() => 
  {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz"

    if (numberAllowed) str+="1234567890 "
    if (charAllowed) str+="@#$%^&*()!+=?/<>~` "

    for (let i = 0; i <= array.length; i++) {
      let char =Math.floor(Math.random() * str.length +1)
      pass = str.charAt(char)
      
    }
    setPassword(pass)

   } , [length,numberAllowed,charAllowed,setPassword])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 '>
        test
      </div>
    </>
  );
}

export default App;
