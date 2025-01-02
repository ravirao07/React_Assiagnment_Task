// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function Addcart() {

//   const [data,setdata]=useState([])

//   const Getdata=()=>{
//     axios.get("http://localhost:8080/cart")
//     .then((res)=>setdata(res.data))
//     .catch((err)=>console.log(err))

//   }

// useEffect(()=>{
//   Getdata()
// },[])

//   return (
//     <div>

//     {data.map((e)=>(
//       <div key={e.id}>
//                   <img src={e.image} alt={e.title} className="card-img-top img-fluid" style={{ maxHeight: "300px", objectFit: "cover" }} />

//         <p>Price:{e.price}</p>
//         <p>Category:{e.category}</p>
//       </div>
      
//     ))}
    
//     </div>
//   )
// }

// export default Addcart

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Addcart() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:8080/cart")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Add to cart</h1>
      <div className="row">
        {data.map((e) => (
          <div key={e.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div className="card shadow" style={{ width: "100%" }}>
              <img
                src={e.image}
                alt={e.title}
                className="card-img-top img-fluid"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-truncate">{e.title}</h5>
                <p className="card-text">Price: ${e.price}</p>
                <p className="card-text">Category: {e.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Addcart;

