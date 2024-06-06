import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link, NavLink } from 'react-router-dom';
import { useFavoriteStore } from "../../stores/favotite";

function BasicExample() {
  const fav = useFavoriteStore((state) => state.fav)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/"> Anasayfa</Nav.Link>
            <Nav.Link as={NavLink} to="/users">Kullanıcılar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Link to={"/"}>Favoriler({fav})</Link>
      </Container>
    </Navbar>
  );
}

export default BasicExample;