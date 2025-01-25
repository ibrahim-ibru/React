import useCustomHook from "./components/useCustomHook"

function App() {
  const {value,increment,decrement} = useCustomHook(0)
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <h1>Count is {value}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default App