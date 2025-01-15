import { useState } from "react"
import Head from "./components/header"

function App(){
  const data=" HOME"
  let [value,setValue]=useState({name:"",mark:"",cls:""})
  
  const handleChange=(e)=>{
    setValue((pre)=>({...pre,[e.target.name]:e.target.value}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const {name,mark,cls}=value
    alert(`${name} ${mark} ${cls}`)
    setValue({name:"",mark:"",cls:""})
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" name="name" value={value.name} onChange={handleChange} />
      <input type="text" placeholder="mark" name="mark" value={value.mark} onChange={handleChange} />
      <input type="text" placeholder="cls" name="cls" value={value.cls} onChange={handleChange} />
      <input type="submit" value={"Add Data"}/>
    </form>
    </>
  )
}


export default App