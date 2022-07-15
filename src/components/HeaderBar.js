import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router";
import { CurrentUser } from '../contexts/CurrentUser';


function HeaderBar() {
  const history = useNavigate()

    const { currentUser } = useContext(CurrentUser)

  let loginActions = (
    <>
      <li>
        <a href="#" onClick={() => history.push("/sign-up")}>
          Sign Up
        </a>
      </li>
      <li>
        <a href="#" onClick={() => history.push("/login")}>
          Login
        </a>
      </li>
    </>
  )
    if (currentUser) {
    loginActions = (
      <li>
        Logged in as {currentUser.username}
      </li>
    )
  }
  
  return (



    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Hangry Nomster</Navbar.Brand>

        <div className="authbuttons">

          <Button variant="success">Sign Up</Button>

          <Button variant="success">Login</Button>

          <Navbar.Toggle aria-controls="navbarScroll" />
          {loginActions}
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <NavDropdown title="Search by" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Cuisine
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Rating
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Difficulty
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderBar;