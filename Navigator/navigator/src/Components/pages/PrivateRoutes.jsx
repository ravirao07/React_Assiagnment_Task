
import React,{Children} from "react"
const PrivateRoutes = ({children}) => {
    const token = localStorage.getItem('token')
    console.log(token,"hello")
    if(!token){
      return <h1 style={{color:"blue"}}>Pleas Sing in your Accouont</h1>

    }
  return children
}

export default PrivateRoutes
