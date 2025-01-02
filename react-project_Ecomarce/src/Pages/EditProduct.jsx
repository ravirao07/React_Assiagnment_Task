import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../App.css";

const EditProduct = () => {
  const [editProduct, setEditProduct] = useState({
    image: '',
    title: '',
    price: 0,
    category: '',
    description: ''
  });

  const [editHistory, setEditHistory] = useState([]); // State to store edit history
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/Product/${id}`)
      .then((res) => {
        setEditProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/Product/${id}`, editProduct)
      .then((res) => {
        console.log('Product updated successfully:', res.data);
        alert('Product updated successfully');

        setEditHistory([...editHistory, editProduct]);

        setEditProduct({
          image: '',
          title: '',
          price: 0,
          category: '',
          description: ''
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="bg-danger text-white text-center p-3">Edit Product</h2>
      <div className="row mt-4">
        {/* Product Details */}
        <div className="col-md-5 border p-3 rounded mb-4">
          <b>{editProduct.id}</b>
          <h1>{editProduct.title}</h1>
          <img src={editProduct.image} alt={editProduct.title} className="img-fluid img-animate" />
          <p><strong>Price:</strong> ${editProduct.price}</p>
          <p><strong>Category:</strong> {editProduct.category}</p>
          <p>{editProduct.description}</p>
        </div>

        {/* Edit Form */}
        <div className="col-md-7">
          <form onSubmit={handleSubmit} className="border p-3 rounded">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={editProduct.title}
                onChange={handleChange}
                className="form-control"
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={editProduct.category}
                onChange={handleChange}
                className="form-control"
                placeholder="Category"
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={editProduct.price}
                onChange={handleChange}
                className="form-control"
                placeholder="Price"
              />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                name="image"
                value={editProduct.image}
                onChange={handleChange}
                className="form-control"
                placeholder="Image URL"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={editProduct.description}
                onChange={handleChange}
                className="form-control"
                rows="4"
                placeholder="Description"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-danger mt-3 btn-animate w-100">Edit Product</button>
          </form>
        </div>
      </div>

      {/* Edit History Table */}
      <h2 className="mt-5">Edit History</h2>
      <div className="table-responsive">
        <table className="table table-bordered mt-3">
          <thead className="thead-dark">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {editHistory.map((edit, index) => (
              <tr key={index}>
                <td>
                  <img src={edit.image} alt={edit.title} className="img-fluid" width={100} />
                </td>
                <td>{edit.title}</td>
                <td>{edit.category}</td>
                <td>${edit.price}</td>
                <td>{edit.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditProduct;
