import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Best Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='home' >Home</Nav.Link>
                            <Nav.Link as={Link} to='about'>About Us</Nav.Link>
                            <Nav.Link as={Link} to='blogs'>Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='login'>Login</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                userName
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;