import { use } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [otherState, setOtherState] = useState(false)
  // --------------------------------------------------------------------------------------------------     
  // this is an expensive calculation
  // const expensiveCalculation = () => {
  //   console.log("Running expensive calculation");
  //   let sum = 0
    
  //   for (let i = 0; i < 1000000000; i++) {
  //     sum+=i
  //   }
  //   return sum
  // }
  // ----------------------------------------------------------------------------------------------------
  // this is a memoized version of the expensive calculation
  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation");
    let sum = 0
    
    for (let i = 0; i < 1000000000; i++) {
      sum+=i
    }
    return sum
  }, [count])  
  return (
    <>
      <h1>Expensive Value {expensiveCalculation} </h1>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <button onClick={() => setOtherState(!otherState)}>Toggle state</button>
    </>
  )
}


export default App