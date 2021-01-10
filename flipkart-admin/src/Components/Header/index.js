import React from 'react';
import {Nav,Container,Navbar} from 'react-bootstrap';
import {NavLink,Link} from 'react-router-dom';
function Header(props) {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <li className='navbar-brand'><Link to="/">Admin Dashboard</Link></li>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <li className='nav-item'>
<NavLink to ='signin' className="nav-link">
  SignIn
</NavLink>
      </li>
      <li className='nav-item'>
<NavLink to ='signup' className="nav-link">
  Signup
</NavLink>
      </li>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
            
        
    );
}

export default Header;