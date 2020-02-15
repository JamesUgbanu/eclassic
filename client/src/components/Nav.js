import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCartTotal, getQuantity } from './helpers';
import SideBar from './SideBar';
import logo from '../../images/eclassik-small-logo.png';
// eslint-disable-next-line react/prefer-stateless-function
class Nav extends Component {
  render() {
    const { cart, auth } = this.props;
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <header className="shadow__menu">
        <div className="topbar top__menu">
          <SideBar bubble authenticate={auth} />
        </div>

        <div className="topbar">
          <NavLink to="/"><img className="logo" src={logo} alt="Eclassic logo" /></NavLink>
        </div>
        <div className="topbar">
          <NavLink to="/cart">
              <div className="cart__box">
              <i className="fa fa-shopping-bag fa-3x"><span>{cart ? getQuantity(cart) : 0}</span></i>
              <div className="cart__total">
                { getCartTotal(cart) !== 0 ? `$${getCartTotal(cart)}` : 'no item'}
                </div>
              </div>
          </NavLink>
        </div>
      </header>
    );
  }
}

Nav.propTypes = {
  cart: PropTypes.array,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(
  mapStateToProps,
  null
)(Nav);
