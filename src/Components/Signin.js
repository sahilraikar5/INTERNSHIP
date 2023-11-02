import React from 'react';

const Signin = () => {
  return (
    <section className="body">
      <div className="signinbox">
        <h2 className="my-5">Please Sign In</h2>
        <div className="inputbox">
          <input type="text" className="form-control" placeholder="Email" />
          <input type="password" className="form-control my-4" placeholder="Password" />
          <a href="/Home">
            <button className="btn btn-primary">LOGIN</button>
          </a>
        </div>
        <div className="my-4">
          <a href="/Signup" className="mx-3">
            Forgot Password?
          </a>
          <a href="/Signup" className="mx-3">
            Don't have an Account?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Signin;
