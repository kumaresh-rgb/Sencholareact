import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


 function Signup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
<div>
    {/* NAVIGATION BAR */}
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary fw-bold fixed-top">
        <Container>
          <Navbar.Brand  href="/"><h3><span><i class="bi bi-cart"></i></span> Amazon</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
               <Nav.Link  href="/">Home</Nav.Link>
               <span><i class="bi bi-house"></i></span>
                  <Nav.Link  href="/Login">SignIn</Nav.Link> 
                  <Nav.Link  href="/Signup">SignUp</Nav.Link> 
                
                  <Nav.Link  onClick={handleShow} >Products</Nav.Link>
      

                  
                  <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Comming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, i know Your are  interested </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    {/* SIGNUP PAGE */}
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <p className="text-white-50 mb-5">Please enter your email and password!</p>
                  <div className="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                  </div>
                  <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                  <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleShow}>Summit</button>
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                  </div>
                </div>
                <div>
                  <p className="mb-0">Don't have an account? <a href="#" className="text-white-50 fw-bold">Sign Up</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
         )
}
export default Signup;