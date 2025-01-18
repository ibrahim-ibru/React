// import { useState } from "react"


// function App() {

//   let [task,setTask]=useState("")
//   let [todo,setTodo]=useState([])

//   const handleTodo=()=>{
//     setTodo((pre)=>([...pre,task]))
//     setTask("")
//   }

//   const handleDelete=(index)=>{
//     setTodo((pre)=>pre.filter((item,i)=>i!==index))
//   }


//   return (
//     <>
//     <div>
//         <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder="Enter your task" />
//         <button onClick={handleTodo}>Add</button>
//     </div>
//     <ul>
//       {
//         todo.map((item,index)=><li key={index}>{item} <button onClick={()=>(handleDelete(index))}>Delete</button></li>)
//       }
//     </ul>
//     </>
//   )
// }

// export default App()

import { useState } from "react"

const App = () => { 
  let [task,setTask]=useState("")
  let [todo,setTodo]=useState([])

  const handleTodo=()=>{
    setTodo((pre)=>([...pre,task]))
    setTask("")
  }

  const handleDelete=(index)=>{
    setTodo((pre)=>pre.filter((item,i)=>i!==index))
  }

  const handleEdit=(index)=>{
    let ntask=prompt("Enter updated task",todo[index])
    setTodo(todo.map((item,i)=>{
      if(i==index){
        return ntask
      }
      return item 
    }))  
  }

  return(
    <>
    <div>
        <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder="Enter your task" value={task} />
        <button onClick={handleTodo}>Add</button>
    </div>
    <ul>
      {
        todo.map((item,index)=><li key={index}><input type="checkbox" defaultValue={false} onClick={handleCheck}/>{item} <button onClick={()=>(handleEdit(index))}>Edit</button> <button onClick={()=>(handleDelete(index))}>Delete</button></li>)
    }
    </ul>
    </>
  )
}


export default App