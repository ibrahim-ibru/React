import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const Headers = () => {
    const {theme,toggleTheme}=useContext(ThemeContext);
    return (
        <header style={{background:theme==="light"?"white":"black",color:theme==="light"?"black":"white"}}>
            <h1>Header</h1>
            <button onClick={toggleTheme} style={{background:theme==="light"?"black":"white",color:theme==="light"?"white":"black"}}>Toggle Theme</button>
        </header>
    )
}

