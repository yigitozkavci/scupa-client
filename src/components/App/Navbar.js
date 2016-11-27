import { Navbar, Nav, NavItem } from 'react-bootstrap';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

const NavbarInstance = (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">React-Bootstrap</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/schools">
          <NavItem eventKey={1}>Schools</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem eventKey={2}>Login</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarInstance;
