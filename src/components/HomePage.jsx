import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import images from '../images/1.jpg';
import images1 from '../images/2.jpg';
import images2 from '../images/3.jpg';
import images3 from '../images/4.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function HomePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className="container-fluid">
          {/* NAVIGATION */}
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

      {/* MAIN */}
      <Carousel>
        <Carousel.Item>
           <img src={images} className='w-100 vh-100' alt="background" />
          <Carousel.Caption>
            <h3>Welcome to Amazon</h3>
            <p>lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={images1} className='w-100 vh-100' alt="background" />
          <Carousel.Caption>
            <h3>Eelectronics</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={images2} className='w-100 vh-100' alt="background" />
          <Carousel.Caption>
            <h3>Buy Now</h3>
            <p>
            lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={images3} className='w-100 vh-100' alt="background" />
          <Carousel.Caption>
            <h3>Buy Now</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default HomePage;