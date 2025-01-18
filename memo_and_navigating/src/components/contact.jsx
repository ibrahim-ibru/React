import React from "react"
import { useParams } from "react-router-dom"
function Contact(){
    const {id}=useParams()
    return(
        <h1>Contact {id}</h1>
    )
}

export default Contact