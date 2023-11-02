import React from 'react';
import "./Navbar.css"
const Signup = () => {
  return (
    <div>
      <section className="body">
        <div className="signinbox">
          <h2 className="my-5">Please Sign Up</h2>
          <div className="inputbox">
           
          
            <input type="email" className="form-control my-2" placeholder="Email ID" />
            <input type="password" className="form-control my-2" placeholder="Password" />
            <input type="password" className="form-control my-2" placeholder="Confirm Password" />
            <a href="/Home">
              <button className="btn btn-primary">SIGNUP</button>
            </a>
          </div>
          <div className="my-4">
            <a href="/Signin" className="mx-3">Already have an Account?</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
