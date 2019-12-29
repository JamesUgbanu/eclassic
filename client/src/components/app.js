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
            <Route path="/account-overview" render={props => <AccountOverview auth={this.auth} {...props} />} />
            <Route path="/account-details" component={AccountDetails} />
            <Route path="/address-book" component={AddressBook} />
            <Route path="/add-address" component={AddAddress} />
            <Route path="/order" component={Order} />
            <Route path="/order-details" component={OrderDetails} />
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/admin-products" component={AdminProducts} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/admin-order" component={AdminOrder} />
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
