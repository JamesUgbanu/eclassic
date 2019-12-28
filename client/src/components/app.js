import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/products" component={Products} />
            <Route path="/account-overview" component={AccountOverview} />
            <Route path="/account-details" component={AccountDetails} />
            <Route path="/address-book" component={AddressBook} />
            <Route path="/add-address" component={AddAddress} />
            <Route path="/order" component={Order} />
            <Route path="/order-details" component={OrderDetails} />
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/admin-products" component={AdminProducts} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/admin-order" component={AdminOrder} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
