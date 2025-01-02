import React, { useRef } from "react";
import video from "../assets/video/high.mp4";
import video2 from "../assets/video/high2.mp4";
import logo from "../assets/Image/img1.webp";
import bike from "../assets/Image/img2.webp";
import people from "../assets/Image/img3.webp";
import truck from "../assets/Image/truck.webp";
import "../App.css";
import mainlogo from "../assets/Image/mainlogo.png";

const Homepage = () => {
  const ref = useRef(null);

  return (
    <>
      <div>
        <div
          style={{
            position: "absolute",
            marginTop: "10%",
            color: "white",
            marginLeft: "5%",
          }}
          className="text-container"
        >
          {/* <div className="vl"></div> */}
          <h1>Built for Adventure</h1>
          <p style={{marginTop:"20px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Eligendi quis corrupti necessitatibus dignissimos cumque id,
            voluptatum aut aliquam nisi cum.
          </p>
        </div>
        <div>
          <video loop autoPlay muted style={{ width: "100%", height: "100vh" }}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <section className="container">
        <div className="text-center my-5">
          <hr />
          <span style={{ fontSize: "32px" }}>For the Restless</span>
        </div>
        <div className="row justify-content-center">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 text-center my-3"
              style={{ padding: "10px" }}
            >
              <img
                src={logo}
                alt="Adventure"
                className="img-fluid"
                style={{ height: "400px" }}
              />
              <h3 className="pt-3">Adventure</h3>
              <p className="pt-3">Travel-ready styles for any journey.</p>
              <button className="btn btn-outline-dark mt-3">EXPLORE</button>
            </div>
          ))}
        </div>
      </section>

      <section className="position-relative">
        <div
          className="text-container"
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            color: "white",
          }}
        >
          {/*    */}
          <h1>The Motion Collection</h1>
          <p style={{marginTop:"20px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Eligendi quis corrupti necessitatibus dignissimos cumque id,
            voluptatum aut aliquam nisi cum.
          </p>
          <p className="btn btn-light mt-3">SHOP NOW</p>
        </div>
        <video loop autoPlay muted style={{ width: "100%", height: "100vh" }}>
          <source src={video2} type="video/mp4" />
        </video>
      </section>

      <section className="container">
        <div className="text-center my-5">
          <h1>Spring Arrivals</h1>
        </div>
        <div className="row text-center">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="col-6 col-md-3 my-3">
              <img
                src={people}
                alt="Spring Arrival"
                className="img-fluid"
              />
              <button className="btn btn-outline-dark mt-3">
                SHOP ITEM {index + 1}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h1 className="text-center mb-4">Subscribe to AETHER</h1>
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <input
                type="text"
                placeholder="EMAIL ADDRESS"
                className="form-control mb-3"
                style={{ borderRadius: "50px" }}
              />
              <div className="d-flex justify-content-center gap-3 mb-3">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="men"
                    value="men"
                  />
                  <label className="form-check-label" htmlFor="men">
                    MEN
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="women"
                    value="women"
                  />
                  <label className="form-check-label" htmlFor="women">
                    WOMEN
                  </label>
                </div>
              </div>
              <button className="btn btn-outline-dark">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
