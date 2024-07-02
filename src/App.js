import React, { useContext } from "react";
import Navbar from "./Navbar";
import { d } from "./Home";
function App({d}){
 // let count=useContext(d)
 console.log(d)
  return(
    <>
    <Navbar b={d}/>
    
    </>
  )
}
export default App;