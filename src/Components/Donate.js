import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Donate = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Blood_type, setBloodtype] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Location, setLocation] = useState('');

  const handleDonate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/dj", {
        Name,
        Email,
        Blood_type,
        Mobile,
        Location,
      });
      console.log(response);
      // alert('success')
      // Assuming your backend returns a success message
      toast.success(response.data.message);
    } catch (error) {
      // Handle registration failure
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      {/* <Container> */}
        <h1 className="text-center mt-4">REGISTRATION FORM</h1>
        <Form id="donation-form" className="mt-4" onSubmit={handleDonate}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={Name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={Email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Bloodtype</Form.Label>
            <Form.Control type="text" value={Blood_type} onChange={(e) => setBloodtype(e.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" value={Mobile} onChange={(e) => setMobile(e.target.value)} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" value={Location} onChange={(e) => setLocation(e.target.value)} required />
          </Form.Group>
          {/* Other form fields (Email, Blood Group, Mobile, Location) follow a similar structure */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
          <ToastContainer />
      {/* </Container> */}
    </div>
  );
};

export default Donate;
