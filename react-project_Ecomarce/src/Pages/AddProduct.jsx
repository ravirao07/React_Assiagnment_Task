import axios from 'axios';
import React, { useState } from 'react';
import "../App.css";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    image: '',
    title: '',
    price: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/Product", productData)
      .then(response => {
        alert('Product Added Successfully');
        console.log(response.data);
        setProductData({
          image: '',
          title: '',
          price: '',
          category: '',
          description: ''
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-12">
          <input
            type="text"
            name="image"
            className="form-control"
            placeholder="Enter image URL"
            value={productData.image}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Enter Product Title"
            value={productData.title}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="price"
            className="form-control"
            placeholder="Enter Product Price"
            value={productData.price}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="category"
            className="form-control"
            placeholder="Enter Product Category"
            value={productData.category}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <textarea
            name="description"
            className="form-control"
            rows="4"
            placeholder="Enter Product Description"
            value={productData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-success px-5 py-2"
          >
            ADD-PRODUCT
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
