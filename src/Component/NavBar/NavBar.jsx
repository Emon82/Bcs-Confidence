import React from 'react'
import './NavBar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/image/bcslogo.png'

export default function NavBar({image}) {
return (
<div className='navimage' >

    <div className="overly">
        <div className="container">
            <div className="row">
                <div className="col-md-6 address">
                <p style={{margin:"10px"}}>+8801922-101514/15</p>
                <p style={{margin:"10px"}}>info@bcs-confidence.com</p>
                </div>
                <div className="col-md-6 addressancor" >
                    <a  href="">লগ-ইন</a>
                    <a  href="">রেজিষ্ট্রেশন</a>
                </div>
            </div>
            <Navbar  expand="lg">
      <Container>
        <Navbar.Brand > <img style={{maxWidth:"100%",height:"50px"}} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link style={{color:"white"}} href="#home">হোম</Nav.Link>
            <Nav.Link style={{color:"white"}} href="#link">আমাদের সম্পর্কে</Nav.Link>
            <Nav.Link style={{color:"white"}} href="#about">শাখা সমূহ </Nav.Link>
            <Nav.Link style={{color:"white"}} href="#contact">কোর্স সমূহ</Nav.Link>
            <Nav.Link style={{color:"white"}} href="#contact">এক্সাম সমূহ</Nav.Link>
            <Nav.Link style={{color:"white"}} href="#contact">যোগাযোগ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="text-center" style={{marginTop:"250px"}}>
            <h1 style={{color:"yellow",}}>BCS Confidence</h1>
            <h5 style={{color:"white"}}>BCS কনফিডেন্স ১৯৯১ সালে প্রতিষ্ঠিত চাকুরি প্রার্থীদের একটি সহায়ক প্রতিষ্ঠান</h5>
        </div>
        <div className="text-center" >
        <button style={{backgroundColor:"#f1c40f",borderRadius:"5px", height:"45px",margin:"65px",width:"140px"}}> কোর্স সমূহ</button>
        <button style={{backgroundColor:"#f1c40f",borderRadius:"5px", height:"45px",width:"200px"}}>বিনামূল্যে পরামর্শ নিন</button>
        </div>
        </div>
    </div>

</div>
)
}
