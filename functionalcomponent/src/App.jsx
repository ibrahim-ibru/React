import { useState } from "react"
import Head from "./components/header"

function App(){
  const data=" HOME"
  let [name,setName]=useState(0)
  const handleClick=()=>{
    setName(name+=1)
  }
  return(
    <>
    <button onClick={handleClick}> Click</button>
    <h1>Hello Team {name}</h1>
    <Head data={data}/>
    </>
  )
}


export default App