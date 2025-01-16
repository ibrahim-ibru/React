const { useEffect } = require("react")

function App(){
  const [data,setData]=useState([])

  useEffect(()=>{
    fetch(`https://dummyjson.com/products`)
    .then(res=>res.json())
    .then((out)=>{
      setData([...out.products])
    })
  },[])

  return(
    <div>
      <ul>
        {
          data.map((item,index)=><li key={index}>{item.title}</li>)
        }
      </ul>
    </div>
  )
}

export default App