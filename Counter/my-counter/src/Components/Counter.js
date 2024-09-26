import {useState} from "react"
import './Counter.css'
function Counter(){
    let [name,setname] = useState(0)
    return(
        <div id="container">
            <div className="main">
                <h2>Counter</h2>
            <h1>{name}</h1>
            <div className="buttons">
            <button style={{backgroundColor:"bisque"}} disabled={name ==0} onClick={()=>setname(name-1)}>Decrement</button>
            <button style={{backgroundColor:" lightyellow"}} onClick={()=>setname(0)}>Reset</button>
            <button style={{backgroundColor:"darkgoldenrod"}} onClick={()=>setname(name+1)}>Increment</button>
            </div>
            </div>
        </div>
    )
}
export default Counter;