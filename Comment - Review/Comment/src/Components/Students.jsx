import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


let initalvalue={
  name:"",
  email:"",
  password:"",
  grade:"",
  gender:""

}
const StudentForm = () => {
const [formdata,setformdata]=useState(initalvalue)
const{name,email,password,grade,gender}=formdata

const handlechange=(e)=>{
 setformdata({...formdata,[e.target.name]:e.target.value})
}
const handlesubmit=(e)=>{
  e.preventDefault();
  console.log(formdata)
}
  return (
  <div >
      <h2>Student Form</h2><br /><br />
      <form onSubmit={handlesubmit} style={{boxShadow:"0px 0px 5px 0.8px" ,height:"380px"}}>
        <input style={{backgroundColor:"transparent",color:"white"}} className="form-control form-control-lg" type="text" name='name' value={name} onChange={(e) => handlechange(e)} placeholder='name' />  <br />
        <input style={{backgroundColor:"transparent"}} className="form-control form-control-lg" type="email" name='email' value={email} onChange={(e) => handlechange(e)} placeholder='email' /><br />
        <input style={{backgroundColor:"transparent"}} className="form-control form-control-lg" type="password" name='password' value={password} onChange={(e) => handlechange(e)} placeholder='password' /><br />
        <Form.Select style={{backgroundColor:"transparent"}} name="grade" aria-label="" value={grade} onChange={(e) => handlechange(e)}>
      <option>Plase choose your Category</option>
      <option value="Primary">Primary</option>
      <option value="Secondary">Secondary</option>
      <option value="High_Secondary">High_Secondary</option>
      <option value="Collage">Collage</option>
    </Form.Select>
        <label htmlFor="" style={{marginLeft:"-170px",marginTop:"15px"}}> MALE </label><input type="radio" onChange={(e) => handlechange(e)} name="gender" value={gender} /> &nbsp;&nbsp;&nbsp;&nbsp;
        <label htmlFor=""> FEMALE </label><input type="radio" onChange={(e) => handlechange(e)} name="gender" value={gender} />&nbsp;&nbsp;&nbsp;&nbsp;
       <label htmlFor=""> OTHER</label><input type="radio" onChange={(e) => handlechange(e)} name="gender" value={gender} /><br/><br/>
        <Button  variant="primary" onClick={handlesubmit} style={{marginLeft:"-320px"}}>Primary</Button>{' '}

      </form>

    </div>

   
  )
}

export default StudentForm