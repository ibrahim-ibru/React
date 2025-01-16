import { useState } from 'react'
import './App.css'

function App(){
  let [value,setValue]=useState({name:"",phone:"",email:""})

  const handleChange=(e)=>{
    setValue((pre)=>({...pre,[e.target.name]:e.target.value}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const {name,phone,email}=value 
    alert(`name:${name},phone:${phone},email:${email}`)
    setValue({name:"",phone:"",email:""})
  }

  return(
    <>
      <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder='name' value={value.name} name='name'/>
        <input type="text" onChange={handleChange} placeholder='phone' value={value.phone} name='phone'/>
        <input type="text" onChange={handleChange} placeholder='email' value={value.email} name='email'/><br />
        <input type="submit" />
      </form>
      </div>
    </>
  )
}

export default App