import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartWidget from "../../common/cartWidget/CartWidget";

function BasicExample() {
  const { cart } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="navbarContainer">
      <Link to="/" className="navbar-brand">
        <img
          style={{ margin: "30px" }}
          src="https://firebasestorage.googleapis.com/v0/b/react-emiliacampagnon.appspot.com/o/me!%20(6).png?alt=media&token=39830d3b-dd52-4b5a-a2c5-ca1976603fb4"
          width={180}
          alt="LogoViu"
        />
      </Link>

      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <span className="nav-link">About Us</span>
            <NavDropdown title="Products" className="nav-link">
              <Link to="/category/calzaslargas" className="dropdown-item">
                Calzas Largas
              </Link>
              <Link to="/category/calzascortas" className="dropdown-item">
                Calzas Cortas
              </Link>
              <Link to="/category/tops" className="dropdown-item">
                Tops
              </Link>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
