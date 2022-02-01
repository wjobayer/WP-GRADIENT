import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../images/Gradient.png'
import useAuth from '../../Firebase/useAuth';


const Header = () => {
  const {user,logOut,admin}=useAuth();
    return (
        <div>
          <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
          <Navbar.Brand><Link className="nav-link " to="/"><img src={logo} width="200px" alt="" /></Link></Navbar.Brand>
   
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
          <Nav.Link><Link className="nav-link mt-2" to="/home">HOME<Link/></Link></Nav.Link>
          <Nav.Link><Link className="nav-link  mt-2" to="/products">EXPLORE<Link/></Link></Nav.Link>
          <Nav.Link><Link className="nav-link  mt-2" to="/support">SUPPORT<Link/></Link></Nav.Link>
          <Nav.Link><Link className="nav-link  mt-2" to="/dashboard">DASHBOARD<Link/></Link></Nav.Link>
          <Nav.Link><Link className="nav-link  mt-2" to="/"><FontAwesomeIcon icon={faSearch} /></Link></Nav.Link>
          <NavDropdown className="nav-link" title={<img width="40px" className="rounded-circle" src={user.photoURL} alt="" />} id="basic-nav-dropdown">
        <NavDropdown.Item className="fs-5 text-primary" disabled>MY ACCOUNT</NavDropdown.Item>
          {user?.email ?
                      
                      <div>
                        <Button onClick={logOut} className="text-danger ms-3" variant="light">Profile</Button>
                        <Button onClick={logOut} className="text-danger ms-3" variant="light"> Logout</Button>
                      </div> :
                      <Nav.Link className="nav-link ms-3 text-primary" as={Link} to="/signin"> Sign In</Nav.Link>}
        </NavDropdown>
        
      <Nav.Link><Link className="nav-link  mt-2" to="/">{user.displayName}<Link/></Link></Nav.Link>
        </Nav>
      
        </Navbar.Collapse>
      </Container>
      </Navbar>
        </div>
    );
};

export default Header;