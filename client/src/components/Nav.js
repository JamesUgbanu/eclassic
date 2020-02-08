import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCartTotal } from './helpers';
import SideBar from './SideBar';
import logo from '../../images/eclassik-small-logo.png';
// eslint-disable-next-line react/prefer-stateless-function
class Nav extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <header className="shadow__menu">
        <div className="topbar top__menu">
          <SideBar bubble authenticate={this.props.auth} />
        </div>

        <div className="topbar">
          <NavLink to="/"><img className="logo" src={logo} alt="Eclassic logo" /></NavLink>
        </div>
        <div className="topbar">
          <div className="cart__box">
            <NavLink to="/cart">
              <i className="fa fa-shopping-bag fa-3x"><span>{this.props.cart ? this.props.cart.length : 0}</span></i>
              <div className="cart__total">
                { getCartTotal(this.props.cart) !== 0 ? `$${getCartTotal(this.props.cart)}` : 'no item'}
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
