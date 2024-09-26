import { useState } from "react";
import './App.css'
import { Post } from "./Components/Post";
function App() {
  const [data, setdata] = useState([]);
 function Fetchdata()
  {
    // console.log("hdhdhddd");
   fetch("https://jsonplaceholder.typicode.com/posts")
   .then((res) => res.json())
   .then((data) =>setdata(data))
   .catch((err)=>console.log(err))
  }
  return (
    <>
        <div>
      <button onClick={()=>Fetchdata()}>GET POST</button>
      <div>
        {data.map((el)=>( 
          
            <div style={{border : "2px solid black",margin:"25px 0px"}}>
              <Post key= {el.id} title={el.title} body={el.body}/>
            </div>
          
        ))}
      </div>

    </div>
    <Post/>

    </>
  )
}

export default App
