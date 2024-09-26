import React from 'react'
import Button from 'react-bootstrap/Button';  
import { NavLink,Link } from 'react-router-dom'
const Navbar = () => {
    let link = [
        {path : "/", title : "Home"},
        { path : "/about", title : "About" },
        {path : "/product" , title : "Product"},
        {path : "/project", title : "Project"},
        // {path : "/login", title : "Login"}
    ]
  return (
    <div style={{display:"flex",justifyContent:"space-around", backgroundColor:"skay",height:"50px",fontSize:"25px"}}>
        {link.map((el)=> (
            <NavLink style={({isActive})=>{
              return  isActive ? {color:"red"} : {color:"teal" ,textDecoration:"none"}
            }}
             key={el.path}  to={el.path}>{el.title} </NavLink>
        ))}
          <Link to="/login"><Button variant="primary" style={{width:"80px",height:"30px"}}>Login</Button></Link>
      
    </div>
  );
};

export default Navbar
