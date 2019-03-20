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
          <NavItem eventKey={1} href="/demo">
          validation
          </NavItem>
        </Nav>
        <Nav>
          <NavItem eventKey={2} href="/example2">
          Fields demo
          </NavItem>
        </Nav>
        <Nav>
          <NavItem eventKey={3} href="/example3">
          Using withProp
          </NavItem>
        </Nav>        
        <Nav>
          <NavItem eventKey={4} href="/example4">
          show/hide with Checkbox
          </NavItem>
        </Nav>
        <Nav>
          <NavItem eventKey={5} href="/example5">
          Bday component
          </NavItem>
        </Nav>
        <Nav>
          <NavItem eventKey={6} href="/example6">
          Checkbox custom value
          </NavItem>
        </Nav>
        <Nav>
          <NavItem eventKey={7} href="/example7">
          Layout
          </NavItem>
        </Nav>                
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header;
