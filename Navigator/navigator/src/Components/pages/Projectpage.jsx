import React, { useState,useEffect } from 'react'
import  axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

const Projectpage = () => {
  const[product,setproduct] = useState({})
  const [loading,setloading] = useState(false)
  const {id} = useParams()
    useEffect(()=>{       
      axios.get(`https://fakestoreapi.com/products/${id}`).
      then((res)=>
        setproduct(res.data)
      ).

      catch((erro)=>console.log(""))  
    },[]);


  return loading ? <h1> Loading......</h1> :(
    <div>
      <h1>Project page</h1>
      <div style={{display:"flex",justifyContent:"center", boxShadow:"1px 2px 8px 4px", width:"25%",margin:"auto",marginTop:"70px"}}>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src={product.image} width={250} height={250} />
          <Card.Body> 
            <Card.Title><h3>{product.title}</h3></Card.Title>
            <Card.Title><h4>{product.category}</h4></Card.Title> 
            <Card.Title><p>{product.description}</p></Card.Title>
            <Card.Title><h5>{ product?.rating?.rate}</h5> </Card.Title>                                             
              <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

      </div>

    </div>
  )
}

export default Projectpage
