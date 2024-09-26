import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
const Loginpage = () => {
  const [email,setemail] = useState("")
  const [password,setpassword ] = useState("")
  const hendalesubmit=(el)=>{
      el.preventDefault()
      let userdata={
        email,password
      }
      console.log(userdata)
        // post part

          fetch("https://reqres.in/api/login",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userdata)
          }).then((res)=>res.json())
          .then((date)=>{
            localStorage.setItem("token",date.token)
            console.log(date)
          })
          .catch((erro)=>console.log(erro)) 
  }
  return (
    <div style={{
      backgroundImage: `url("https://media.istockphoto.com/id/1322481345/photo/smart-retail-shopping-online-technology-concept-woman-try-to-use-smart-display-with-virtual.jpg?s=612x612&w=0&k=20&c=hApWZfVPHE_XQynkXi6c_9YiclcK_bxEQmU-19Ed1L0=")`,
      backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "765px", maxWidth: "1846px"
    }}>
      <div style={{
         position: 'absolute',
         left: '700px', 
         top: '300px',
         zIndex: 1,
         width: 500,
         height: 400,
      }}>
      <h1 style={{color:"whitesmoke"}}>Login page</h1>
      <Form onSubmit={hendalesubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>&nbsp;&nbsp;&nbsp;
        <Form.Control  type="email" onChange={(e)=>setemail(e.target.value)} placeholder="Enter email" style={{height:"25px",width:"250px",backgroundColor:"transparent",color:"white"}} />
      </Form.Group><br/>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Form.Control type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" style={{height:"25px",width:"250px",backgroundColor:"transparent",color:"white"}} /> 
      </Form.Group><br/>
      <Button variant="primary" type="submit" style={{width:"100px",height:"30px",backgroundColor:"lightskyblue"}}>
        Submit
      </Button>
    </Form>
      </div>
      
    </div>
  )
}

export default Loginpage
