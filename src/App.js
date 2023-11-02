import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Donate from './Components/Donate';
import Request from './Components/Request';
import Signup from './Components/Signup'; // Adjust the import path if needed
import Signin from './Components/Signin'; // Adjust the import path if needed
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/request" element={<Request />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
