import './App.css';
import Home from './Web/Pages/Home/Home';
import AuthProvider from './Web/Firebase/AuthProvider';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import SignIn from './Web/Pages/Sign In/SignIn';
import SignUp from './Web/Pages/Sign Up/SignUp';
import Reviews from './Web/Pages/Reviews/Reviews';
import Products from './Web/Pages/Products/Products';
import NotFound from './Web/Pages/NotFound/NotFound';
import AddProduct from './Web/Pages/AddProduct/AddProduct';
import ConfirmOrdere from './Web/Pages/ConfirmOrder/ConfirmOrdere';
import MyCart from './Web/Pages/My Cart/MyCart';
import CheckOutAllOrder from './Web/Pages/CheckOutAllOrder/CheckOutAllOrder';
import PrivateRoute from './Web/Firebase/PrivateRoute'
import CreateAdmin from './Web/Pages/CreateAdmin/CreateAdmin';
import AdminRoute from './Web/Firebase/AdminRoute';
import ManageProducts from './Web/Pages/ManageProducts/ManageProducts';
import CreateReview from './Web/Components/CreateReview/CreateReview'
import Dashboard from './Web/Pages/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <Home></Home>
      </Route>
      <Route exact path="/home">
          <Home></Home>
        </Route>
      <Route exact path="/products">
          <Products></Products>
        </Route>
        <Route exact path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
        <AdminRoute exact path="/createadmin">
          <CreateAdmin></CreateAdmin>
        </AdminRoute>
        <AdminRoute exact path="/addproduct">
          <AddProduct></AddProduct>
        </AdminRoute>
        <PrivateRoute exact path="/confirmorder/:id">
          <ConfirmOrdere></ConfirmOrdere>
        </PrivateRoute>
        <PrivateRoute exact path="/mycart">
          <MyCart></MyCart>
        </PrivateRoute>
        <PrivateRoute exact path="/createreview">
          <CreateReview></CreateReview>
        </PrivateRoute>
        <AdminRoute exact path="/checkoutallorder">
          <CheckOutAllOrder></CheckOutAllOrder>
        </AdminRoute>
        <Route exact path="/manageproducts">
        <ManageProducts></ManageProducts>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
