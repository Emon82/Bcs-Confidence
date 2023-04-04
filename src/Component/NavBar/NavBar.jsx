import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/image/bcslogo.png";
import "./NavBar.css";

export default function NavBar({ image }) {
  const navigate = useNavigate();

  const redirect = (to) => (e) => {
    // Do something before navigating
    e.preventDefault();
    navigate(to);
  };

  return (
    <div className="navimage">
      <div className="overly">
        <div className="container">
          <div className="row">
            <div className="col-md-6 address">
              <p style={{ margin: "10px" }}>+8801922-101514/15</p>
              <p style={{ margin: "10px" }}>info@bcs-confidence.net</p>
            </div>
            <div className="col-md-6 addressancor">
              <a href="https://bcs-confidence.prostuti.net/">
                Go to Exam panel
              </a>
              <a href="">রেজিষ্ট্রেশন</a>
            </div>
          </div>
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand>
                {" "}
                <a href="/">
                  {" "}
                  <img
                    style={{
                      maxWidth: "100%",
                      height: "50px",
                      cursor: "pointer",
                    }}
                    src={logo}
                    alt=""
                  />
                </a>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link
                    style={{ color: "white" }}
                    onClick={redirect('/')}
                  >
                    হোম
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }}  onClick={redirect("/about")}> 
                    আমাদের সম্পর্কে
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }} onClick={redirect("/branches")}>
                    শাখা সমূহ{" "}
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }} onClick={redirect("#")} >
                    কোর্স সমূহ
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }} onClick={redirect("/examportal")}>
                    এক্সাম সমূহ
                  </Nav.Link>
                  <Nav.Link style={{ color: "white" }} onClick={redirect("/contact")}>
                    যোগাযোগ
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="text-center" style={{ marginTop: "250px" }}>
            <h1 style={{ color: "yellow" }}>BCS Confidence</h1>
            <h5 style={{ color: "white" }}>
              BCS কনফিডেন্স ১৯৯১ সালে প্রতিষ্ঠিত চাকুরি প্রার্থীদের একটি সহায়ক
              প্রতিষ্ঠান
            </h5>
          </div>
          <div className="text-center">
            <button
              style={{
                backgroundColor: "#f1c40f",
                borderRadius: "5px",
                height: "45px",
                margin: "65px",
                width: "140px",
                color: "white",
                fontSize: "1.25rem",
                border: "none",
              }}
            >
              {" "}
              কোর্স সমূহ
            </button>
            <button
              style={{
                backgroundColor: "#f1c40f",
                borderRadius: "5px",
                height: "45px",
                width: "200px",
                color: "white",
                fontSize: "1.25rem",
                border: "none",
              }}
            >
              বিনামূল্যে পরামর্শ নিন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
