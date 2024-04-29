import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar
      style={{ height: "150px" }}
      expand="lg"
      className="bg-body-tertiary"
    >
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dxzytrwpw/image/upload/v1711544966/vb_qtkbhz.png"
          width={150}
          alt="LogoViu"
        />
      </Link>

      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>

            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <Link
                style={{ textDecoration: "none" }}
                to="/category/calzaslargas"
              >
                <NavDropdown.Item href="#action/3.1">
                  Calzas Largas
                </NavDropdown.Item>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/category/calzascortas"
              >
                <NavDropdown.Item href="#action/3.2">
                  Calzas Cortas
                </NavDropdown.Item>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/category/tops">
                <NavDropdown.Item href="#action/3.3">Tops</NavDropdown.Item>
              </Link>

              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link
          to="/cart"
          style={{
            color: "black",
            display: "flex",
            flexWrap: "nowrap",
            textDecoration: "none",
          }}
        >
          <FaCartShopping size={30} /> <h5>5</h5>
        </Link>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
