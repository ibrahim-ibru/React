import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(

        <>
            <Link to={"/"}>About</Link>
            <Link to={"/contact/:id                   "}>Contact</Link>
        </>
    )
}


export default Nav