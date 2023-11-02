import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    
        <nav className="navbar navbar-expand-md justify-content-center bg-dark navbar-dark">
            <div class="container-fluid">
                {/* <Link className="navbar-brand" to="/"</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" class="nav-link active">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/About" class="nav-link ">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Donate" class="nav-link">Registration</Link>
                </li>

                <li className="nav-item">
                    <Link to="/request" class="nav-link">Request</Link>
                </li>

                <li className="nav-item">
                    <Link to="/Signin" class="nav-link1">Signin</Link>
                </li>

                <li className="nav-item">
                    <Link to="/Signup" class="nav-link2">Signup</Link>
                </li>
               
                
            </ul>
        </div>
        </nav>
   
    </>
  )
}

export default Navbar;