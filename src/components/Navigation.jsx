import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
        <Navbar className="navbar-custom bg-dark"
            bg="var(--color-bg)"
            variant="dark"
            expand="sm"
            collapseOnSelect
            fixed='top'
          >
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse className="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to="/About">
                        About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Projects">
                        Projects
                        </Nav.Link>
                        <Nav.Link as={Link} to="/Contact">
                        Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Navigation;
