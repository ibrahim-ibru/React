import About from "./components/about"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Contact from "./components/contact"
import Nav from "./components/nav"

function App(){
 
  return(
    <>
  <BrowserRouter>
  <Nav/>
  <Routes>
<Route path="/" Component={About}/>
<Route path="/contact/:id" Component={Contact}/>

  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App