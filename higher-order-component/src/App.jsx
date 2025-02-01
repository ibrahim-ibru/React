import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import wrappedData from './components/hoc'
import displayData from './components/displaydata'


const EnhancedData=wrappedData(displayData)

function App() {
    const [data,setData]=useState([])
    const [isloading,setIsloading]=useState(true)

    useEffect(()=>{
      setTimeout(()=>{
        setData(["item 1","item 2","item 3","item 4"])
        setIsloading(false)
      },5000)
    },[])

    return <EnhancedData isloading={isloading} data={data}/>
 
}

export default App
