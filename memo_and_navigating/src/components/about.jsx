import React from "react"
import { Link, useNavigate } from "react-router-dom"
function About(){

    const navigate=useNavigate()
    const id=10
    const handleClick=()=>{
        navigate(`/contact/${id}`)
    }

    return(
        <>
                <h1>about</h1>
                <Link to={`/contact/${id}`}>Contact</Link>
                <button onClick={handleClick} >Contact</button>
        </>
    )
}

export default About