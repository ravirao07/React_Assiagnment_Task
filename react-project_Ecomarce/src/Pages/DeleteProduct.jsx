import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DeleteProduct = () => {
  const [deletedProducts, setDeletedProducts] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/Product/${id}`)
      .then((res) => {
        setDeletedProducts([res.data]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Deleted Products</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-success">
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {deletedProducts.map((product, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                    style={{ maxWidth: "100px", borderRadius: "8px" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteProduct;
