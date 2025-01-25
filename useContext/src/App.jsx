
// // This is one method of passing a data from parent to last child

// import { createContext,useContext } from "react"

// // function App() {
// //   const data="helllo"
// //   return (
// //     <div>
// //       <h1>parent</h1>
// //       <Child1 data={data}/>
// //     </div>
// //   )
// // }


// // export default App

// // function Child1({data}) {
// //   return (
// //     <div>
// //       <h1>child1</h1>
// //       <Child2 data={data}/>
// //     </div>
// //   )
// // }

// // function Child2(props) {
// //   return (
// //     <div>
// //       <h1>child2</h1>

// //       <Child3 data={props.data}/>

// //     </div>
// //   )
// // }function Child3(props) {
// //   return (
// //     <div>
// //       <h1>child3</h1>
// //       <Child4 data={props.data}/>

// //     </div>
// //   )
// // }function Child4(props) {
// //   return (
// //     <div>
// //       <h1>child4 {props.data}</h1>
// //     </div>
// //   )
// // }


// // ____________________________________________________________________________________________

// const userContext=createContext()
// function App() {
//   return (
//     <div>
//       <h1>Parent</h1>
//       <userContext.Provider value="hello">
//       <Child1 />

//       </userContext.Provider>
//     </div>
//   )
// }

// export default App

// function Child1() {
//   return (
//     <div>
//       <h1>Child1</h1>
//       <Child2 />
//     </div>
//   )
// }

// function Child2() {
//   return (
//     <div>
//       <h1>Child2</h1>
//       <Child3 />
//     </div>
//   )
// }

// function Child3() {
//   return (
//     <div>
//       <h1>Child3</h1>
//       <Child4 />
//     </div>
//   )
// }

// function Child4() {
//   const data=useContext(userContext)
//   return (
//     <div>
//       <h1>Child4 {data}</h1>
//     </div>
//   )
// }

import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Headers } from "./components/Headers";
import Body from "./components/body";
function App() {
  return (
    <>
      <ThemeProvider>
        <Headers/>
        <Body/>
      </ThemeProvider>
    </>
  )
}

export default App