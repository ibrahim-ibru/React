import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

const Body=()=>{
    const {theme,toggleTheme}=useContext(ThemeContext)
    return(
        <div style={{background:theme==="light"?"white":"black",color:theme==="light"?"black":"white"}}>
            <h1>Body</h1>
            <button onClick={toggleTheme} style={{background:theme==="light"?"black":"white",color:theme==="light"?"white":"black"}}>Toggle Theme</button>
        </div>
    )
}

export default Body