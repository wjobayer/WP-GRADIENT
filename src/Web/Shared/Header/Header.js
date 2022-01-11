import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { faCog, faPencilAlt,faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
          <Nav.Link><Link className="nav-link " to="/home">HOME<Link/></Link></Nav.Link>
          <Nav.Link><Link className="nav-link " to="/products">EXPLORE<Link/></Link></Nav.Link>
          <Nav.Link><Link className="nav-link " to="/dashboard">DASHBOARD<Link/></Link></Nav.Link>
          {/* {admin && <NavDropdown className="nav-link " title="ADMIN" id="basic-nav-dropdown">
          <NavDropdown.Item><Link className="nav-link" to="/createadmin">CREATE ADMIN</Link></NavDropdown.Item>
          <NavDropdown.Item> <Link className="nav-link" to="/addproduct">ADD PRODUCT</Link> </NavDropdown.Item>
          <NavDropdown.Item></NavDropdown.Item>
          <NavDropdown.Item><Link className="nav-link" to="/manageproducts">MANAGE PRODUCT</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className="nav-link" to="/checkoutallorder">CHECKOUT ALL ORDER</Link></NavDropdown.Item>
          </NavDropdown>
          } */}
          <Nav.Link><Link className="nav-link" to="/"><FontAwesomeIcon icon={faSearch} /></Link></Nav.Link>
          <NavDropdown className="nav-link" title={<FontAwesomeIcon icon={faCog} />} id="basic-nav-dropdown">
        
          <NavDropdown.Item className="fs-5" disabled>MY ACCOUNT</NavDropdown.Item>
          {user?.email ?
                      
                      <Button onClick={logOut} className="text-danger ms-3" variant="light"> Logout</Button> :
                      <Nav.Link className="nav-link ms-3 text-primary" as={Link} to="/signin"> Sign In</Nav.Link>}
        </NavDropdown>
        <Navbar.Brand href="#"> <NavItem>   <Link  to="/"><img width="40px" className="rounded-circle" src={user.photoURL} alt="" /></Link> </NavItem> </Navbar.Brand>
      <Nav.Link><Link className="nav-link " to="/">{user.displayName}<Link/></Link></Nav.Link>
        </Nav>
      
        </Navbar.Collapse>
      </Container>
      </Navbar>
        </div>
    );
};

export default Header;