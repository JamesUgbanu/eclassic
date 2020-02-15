import React from 'react';
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
import SimpleForm from './chatbot/SimpleForm';
import '../../style/style.css';
import '../../node_modules/react-progress-bar-plus/lib/progress-bar.css';
// eslint-disable-next-line react/prefer-stateless-function

const App = ({ ajaxLoading }) => {
  const auth = new Auth();
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <Router history={history}>
      <div className={ajaxLoading ? 'progress__bar__container' : null}>
        <ProgressBar />
        <Nav auth={auth} />
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
            render={props => <Login auth={auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={auth} {...props} />}
          />
        </Switch>
        <div className="bot">
            <SimpleForm />
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = ({ ajaxLoading }) => ({
  ajaxLoading
});

export default connect(mapStateToProps, null)(App);
