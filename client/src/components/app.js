import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Cart from './Cart';
import Products from './Products';
import AccountOverview from './AccountOverview';
import AccountDetails from './AccountDetails';
import AddressBook from './AddressBook';
import AddAddress from './AddAddress';
import Order from './Order';
import OrderDetails from './OrderDetails';
import AdminDashboard from './admin/AdminDashboard';
import AdminProducts from './admin/AdminProducts';
import AddProduct from './admin/AddProduct';
import AdminOrder from './admin/AdminOrder';
import Auth from '../Auth/Auth';
import Callback from './Callback';
import history from '../history';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Login from './Login';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth();
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <Router history={history}>
        <div>
          <Nav auth={this.auth} />
          <Switch>
            <Route
              path="/"
              exact
              render={({ props }) => <Home auth={this.auth} {...props} />}
            />
            <Route path="/cart" component={Cart} />
            <Route path="/products" component={Products} />
            <PrivateRoute path="/account-overview" component={AccountOverview} />
            <PrivateRoute path="/account-details" component={AccountDetails} />
            <PrivateRoute path="/address-book" component={AddressBook} />
            <PrivateRoute path="/add-address" component={AddAddress} />
            <PrivateRoute path="/order" component={Order} />
            <PrivateRoute path="/order-details" component={OrderDetails} />
            <AdminRoute path="/admin-dashboard" component={AdminDashboard} />
            <AdminRoute path="/admin-products" component={AdminProducts} />
            <AdminRoute path="/add-product" component={AddProduct} />
            <AdminRoute path="/admin-order" component={AdminOrder} />
            <Route
              path="/login"
              render={props => <Login auth={this.auth} {...props} />}
            />
            <Route
              path="/callback"
              render={props => <Callback auth={this.auth} {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
