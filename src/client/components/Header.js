import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = (props) => {
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Redux Form Demo</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={2} href="/demo">
          validation
          </NavItem>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header;
