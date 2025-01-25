import { useState } from "react"

function useCustomHook(inputhook) {

    const [value,setValue] = useState(inputhook)

    const increment=()=>{
        setValue(value+1)
    }

    const decrement=()=>{
        setValue(value-1)
    }


    return {
        value,increment,decrement
    }
}   

export default useCustomHook