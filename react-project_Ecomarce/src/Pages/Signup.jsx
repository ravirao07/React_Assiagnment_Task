import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Signup = () => {
  return (
    <div className="container mt-5" style={{ maxWidth: '800px', margin: 'auto' }}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4" style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
          <h1 className="text-center" style={{ fontSize: '2rem', color: '#333' }}>Signup Page</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label" style={{ fontSize: '1.1rem', color: '#333' }}>Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                style={{ padding: '10px', fontSize: '1rem', borderRadius: '5px', borderColor: '#ccc' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ fontSize: '1.1rem', color: '#333' }}>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                style={{ padding: '10px', fontSize: '1rem', borderRadius: '5px', borderColor: '#ccc' }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ padding: '10px', fontSize: '1.1rem', backgroundColor: '#007bff', borderColor: '#007bff', borderRadius: '5px' }}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
