import { faArrowRight, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { Switch } from 'react-router';
import { Link, Route,useRouteMatch } from 'react-router-dom';
import logo from '../../../images/Gradient.png'
import AdminRoute from '../../Firebase/AdminRoute';
import PrivateRoute from '../../Firebase/PrivateRoute';
import useAuth from '../../Firebase/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import CheckOutAllOrder from '../CheckOutAllOrder/CheckOutAllOrder';
import CreateAdmin from '../CreateAdmin/CreateAdmin';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyCart from '../My Cart/MyCart';
import Reviews from '../Reviews/Reviews';
import './Dashboard.css'

const Dashboard = () => {
    const{user,admin,logOut}=useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Navbar collapseOnSelect sticky="top" expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand><Link to="/" className="nav-link text-light"><img src={logo} width="200px" alt="" /></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link to="/" className="nav-link">EXIT FROM DASHBOARD <FontAwesomeIcon icon={faShare} /></Link>
    </Nav>
    {user?.email ?
                      
                      <Button onClick={logOut} className="text-danger ms-3" variant="light"> Logout</Button> :
                      <Nav.Link className="nav-link ms-3 text-light" as={Link} to="/signin"> Sign In</Nav.Link>}
    <Nav>
    
    <Navbar.Brand className='ms-3'> <NavItem>   <Link  to="/"><img width="40px" className="rounded-circle" src={user.photoURL} alt="" /></Link> </NavItem> </Navbar.Brand>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
           <Container>
           <div className="row my-3">
                <div className="col-2 bg-primary position-fixed rounded-sidenav ms-0">
                <div className="">
                <Nav.Link><Link className="nav-link text-light  " to={`${url}`}>HOME</Link>
                <Link className="nav-link text-light " to={`${url}/mycart`}>BOOKMARK</Link>
                <Link className="nav-link text-light " to={`${url}/reviews`}>REVIEWS</Link>
                
                </Nav.Link>
                {
                    admin &&<Nav.Link>
                    <Link className="nav-link text-warning " to={`${url}/checkoutallorder`}>CHECKOUT</Link>
                    <Link className="nav-link text-warning " to={`${url}/manageproducts`}>MANAGE</Link>
                    <Link className="nav-link text-warning " to={`${url}/addproduct`}>CREATE BLOG</Link>
                    <Link className="nav-link text-warning " to={`${url}/createadmin`}>CREATE ADMIN</Link>
                    </Nav.Link>
                }
               
                
                </div>
                </div>
                <div className="col-2"></div>
                <div className="col-10"> 
                <Switch>
                    <Route exact path={`${path}`}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute exact path={`${path}/checkoutallorder`}>
                       <CheckOutAllOrder></CheckOutAllOrder>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/createadmin`}>
                       <CreateAdmin></CreateAdmin>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/manageproducts`}>
                       <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute exact path={`${path}/addproduct`}>
                       <AddProduct></AddProduct>
                    </AdminRoute>
                    <PrivateRoute exact path={`${path}/mycart`}>
                        <MyCart></MyCart>
                    </PrivateRoute>
                    <Route exact path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                </Switch>
                </div>
            </div>
           </Container>
        </div>
    );
};

export default Dashboard;