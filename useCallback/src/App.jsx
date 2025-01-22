import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [asd, setAsd]=useState(0)

  const increment=useCallback(()=>{
    setCount((precount)=>precount+asd)
  },[asd])

  console.log("function re created");
  

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={()=>{setAsd(asd+1)}}>increment asd {asd}</button>
    </>
  )
}

export default App
