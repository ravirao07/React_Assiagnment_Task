import React from 'react';
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../App.css";

const Navbar = () => {
  return (
    <div>
   
      <div className="d-flex justify-content-around align-items-start mt-3 flex-wrap">
        <div className="d-flex align-items-start mb-2 mb-lg-0">
          <p className="mb-0 text-uppercase" style={{ fontSize: "12px", paddingTop: "5px" }}>
            FOR THE RESTLESS
          </p>
        </div>
        <div
          className="bg-black text-center text-white rounded-pill px-3 py-1 mb-2 mb-lg-0"
          style={{ width: "50%", fontSize: "12px", marginLeft: "10%" }}
        >
          <a href="#" className="text-white text-decoration-none">SHOP OUR SUMMER ACCESSORIES FLASH SALE</a>
        </div>
        <div style={{ fontSize: "12px" }} className="text-center">
          <p className="mb-0 text-uppercase" style={{ letterSpacing: "5px", paddingTop: "5px" }}>
            LOS ANGELES 01:43 PDT
          </p>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
        <div className="container-fluid">
          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Brand */}
          <Link to="/" className="navbar-brand mx-5 text-dark text-decoration-none">
            <span style={{ fontSize: "35px", letterSpacing: "5px" }}>AETHER</span>
          </Link>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex align-items-center" style={{ fontSize: "20px" }}>
            <FaSearch className="mx-4" />
            <Link to="/Login">
              <button className="Btn">
                <div className="sign">
                  <svg viewBox="0 0 512 512">
                    <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                  </svg>
                </div>
                <div className="text">Login</div>
              </button>
            </Link>
            <Link to="/Addcart" className="text-dark text-decoration-none mx-2">
              <FaShoppingCart className="mx-4" />
            </Link>
          </div>

          {/* Offcanvas Menu */}
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/Productpage" className="nav-link text-dark text-decoration-none">MEN</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Womenpage" className="nav-link text-dark text-decoration-none">WOMEN</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Explore" className="nav-link text-dark text-decoration-none">Explore</Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link to="/Login" className="nav-link text-dark text-decoration-none">Login</Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link to="/Addcart" className="nav-link text-dark text-decoration-none">Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
