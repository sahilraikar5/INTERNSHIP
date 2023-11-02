import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Request = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Blood_type, setBloodType] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Location, setLocation] = useState('');

  const handleRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/blood", {
        Name,
        Email,
        Blood_type,
        Mobile,
        Location,
      });

      console.log(response);
      // Assuming your backend returns a success message
      toast.success(response.data.message);
    } catch (error) {
      // Handle request failure
      toast.error("Request failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">REQUEST FORM</h1>
      <Form id="donation-form" className="mt-4" onSubmit={handleRequest}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={Name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Blood Type</Form.Label>
          <Form.Control as="select" value={Blood_type} onChange={(e) => setBloodType(e.target.value)} required>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            {/* Add other blood types similarly */}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="tel" value={Mobile} onChange={(e) => setMobile(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" value={Location} onChange={(e) => setLocation(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Request;
