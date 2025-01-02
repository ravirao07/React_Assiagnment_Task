import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import mainlogo from "../assets/Image/mainlogo.png";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Product/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/Product/${id}`)
      .then(() => {
        alert("Product deleted successfully!");
        console.log(product);
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  const addToCardFunction = () => {
    axios
      .post("http://localhost:8080/cart", product)
      .then((res) => {
        console.log(res);
        alert("Data added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!product) {
    return (
      <div className="text-center mt-4" style={{ fontSize: "45px", fontWeight: "bold" }}>
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center">Product Details</h2>
        <div className="card mx-auto mt-4" style={{ width: "90%", maxWidth: "600px" }}>
          <div className="card-body text-center">
            <h1 className="card-title">{product.title}</h1>
            <img
              src={product.image}
              alt={product.title}
              className="card-img-top img-fluid"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
            <p className="card-text font-weight-bold">Price: {product.price}</p>
            <p className="card-text">Category: {product.category}</p>
            <p className="card-text">Color: {product.Color}</p>
            <p className="card-text">{product.description}</p>
            <div className="d-flex flex-wrap justify-content-around mt-4">
              <Link to={`/Editproduct/${product.id}`} className="btn btn-warning">
                Edit
              </Link>
              <Link onClick={handleDelete} to={`/Deleteproduct/${product.id}`} className="btn btn-danger">
                <button className="btn btn-danger">Delete</button>
              </Link>
              <Link to={"/Addcart"} onClick={addToCardFunction} className="btn btn-primary">
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <section className="bg-secondary py-5 mt-4 text-center">
        <div className="container">
          <h2>Subscribe to AETHER for exclusive updates.</h2>
          <input
            type="text"
            placeholder="EMAIL ADDRESS"
            className="form-control my-3"
            style={{ borderRadius: "50px" }}
          />
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="men" value="men" />
            <label className="form-check-label" htmlFor="men">MEN</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="women" value="women" />
            <label className="form-check-label" htmlFor="women">WOMEN</label>
          </div>
          <button className="btn btn-outline-light mt-3">Subscribe</button>
        </div>
      </section>

      {/* Footer Section */}
      <div className="text-center py-5">
        <a
          href="#"
          className="text-dark"
          style={{
            fontSize: "150px",
            letterSpacing: "5px",
            textDecoration: "none",
          }}
        >
          AETHER
        </a>
        <div className="spin-container">
          <div className="spin-text">
            <div className="spin-circle">
              <img src={mainlogo} alt="Logo" className="spin-logo img-fluid" style={{ height: "200px", width: "100px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
