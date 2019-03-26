import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = (props) => {
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Redux Demo</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={1} title="Redux-Form" >
            <MenuItem eventKey={1.1} href="/example1">HanldeSubmit/SubmissionError</MenuItem>
            <MenuItem eventKey={1.2} href="/example2">Fields</MenuItem>
            <MenuItem eventKey={1.3} href="/example3">Using withProp</MenuItem>
            <MenuItem eventKey={1.4} href="/example4">show/hide with Checkbox</MenuItem>
            <MenuItem eventKey={1.5} href="/example5">Bday component</MenuItem>
            <MenuItem eventKey={1.6} href="/example6">Checkbox custom value</MenuItem>
          </NavDropdown>          
        </Nav>        
        <Nav>
          <NavDropdown eventKey={2} title="Recompose" >
            <MenuItem eventKey={2.1} href="/example8">withStateHandlers</MenuItem>
          </NavDropdown>          
        </Nav>
        <Nav>
          <NavDropdown eventKey={3} title="Responsive Design" >
            <MenuItem eventKey={3.1} href="/example7">Layout</MenuItem>
          </NavDropdown>          
        </Nav>
        <Nav>
          <NavDropdown eventKey={4} title="Apollo client - graphql" >
            <MenuItem eventKey={4.1} href="/example9">Multiple queries</MenuItem>
          </NavDropdown>          
        </Nav>        
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header;


