import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartTotal } from './helpers';

// eslint-disable-next-line react/prefer-stateless-function
class Nav extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <header className="shadow__menu">
        <div className="topbar top__menu">
          <input type="checkbox" id="menuToggle" />
          <label htmlFor="menuToggle" className="menu__icon fa fa-bars fa-2x" />
          <nav className="navigation__menu">
            <ul>
              <NavLink to="/"><li>Home</li></NavLink>
              <NavLink to="/products"><li>All Products</li></NavLink>
              <NavLink to="#"><li>About us</li></NavLink>
              <NavLink to="#"><li>Contact us</li></NavLink>
              {isAuthenticated() ? (
                <button className="auth__btn" onClick={logout}>Logout</button>
              ) : (
                <button className="auth__btn" onClick={login}>Log In/SignUp</button>
              )}

            </ul>
          </nav>
        </div>

        <div className="topbar">
          <NavLink to="/"><img className="logo" src="images/eclassik-small-logo.png" alt="Eclassic logo" /></NavLink>
        </div>
        <div className="topbar">
          <div className="cart__box">
            <NavLink to="/cart">
              <i className="fa fa-shopping-bag fa-3x"><span>{this.props.cart ? this.props.cart.length : 0}</span></i>
              <div className="cart__total">
$
                { getCartTotal(this.props.cart) }
              </div>
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  null
)(Nav);
