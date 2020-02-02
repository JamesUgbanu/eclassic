import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Cart from './Cart';
import Products from './Products';
import SingleProduct from './SingleProduct';
import AccountOverview from './AccountOverview';
import AccountDetails from './AccountDetails';
import AddressBook from './AddressBook';
import AddAddress from './AddAddress';
import Checkout from './Checkout';
import Order from './Order';
import OrderDetails from './OrderDetails';
import AdminOrderDetails from './admin/AdminOrderDetails';
import AdminDashboard from './admin/AdminDashboard';
import AdminProducts from './admin/AdminProducts';
import AddProduct from './admin/AddProduct';
import EditProduct from './admin/EditProduct';
import AdminOrder from './admin/AdminOrder';
import Auth from '../Auth/Auth';
import Callback from './Callback';
import history from '../history';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Login from './Login';
import Message from './admin/Message';
import ProgressBar from './ProgressBar';
import '../../style/style.css';
import '../../node_modules/react-progress-bar-plus/lib/progress-bar.css';
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
        <div className={this.props.ajaxLoading ? 'progress__bar__container' : null}>
          <ProgressBar />
          <Nav auth={this.auth} />
          <Message />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/products" component={Products} />
            <Route path="/product/:productName/:productId?" component={SingleProduct} />
            <PrivateRoute path="/account-overview" component={AccountOverview} />
            <PrivateRoute path="/checkout" component={Checkout} />
            <PrivateRoute path="/account-details" component={AccountDetails} />
            <PrivateRoute path="/address-book" component={AddressBook} />
            <PrivateRoute path="/add-address" component={AddAddress} />
            <PrivateRoute path="/order/:pageNo?" component={Order} />
            <PrivateRoute path="/order-details/:OrderId?" component={OrderDetails} />
            <PrivateRoute path="/admin-order-details/:OrderId?" component={AdminOrderDetails} />
            <AdminRoute path="/admin-dashboard" component={AdminDashboard} />
            <AdminRoute path="/admin-products/:pageNo?" component={AdminProducts} />
            <AdminRoute path="/add-product" component={AddProduct} />
            <AdminRoute path="/edit-product/:id" component={EditProduct} />
            <AdminRoute path="/admin-order/:pageNo?/:status?" component={AdminOrder} />
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
const mapStateToProps = ({ ajaxLoading }) => ({
  ajaxLoading
});

export default connect(mapStateToProps, null)(App);
