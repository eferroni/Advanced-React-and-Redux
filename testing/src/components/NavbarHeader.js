import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const NavbarHeader = ({ handleChangeAuth }) => {
  const isLoggedIn = useSelector((state) => state.auth);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/post">
            Post
          </Nav.Link>
        </Nav>{" "}
        <Button variant="light" onClick={() => handleChangeAuth(!isLoggedIn)}>
          {isLoggedIn ? "Sign Out" : "Sign In"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
