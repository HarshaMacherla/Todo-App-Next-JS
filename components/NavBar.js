import Link from "next/link";
import { Navbar, Container, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar className="bg-info text-white m-0">
        <Container className="m-0">
          <Navbar.Brand>
            <Link href="/" className="text-decoration-none text-white">
              Todos App
            </Link>
          </Navbar.Brand>
        </Container>
        <Container className="justify-content-end">
          <Link href="/completed">
            <Button variant="outline-light">Show Completed</Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
