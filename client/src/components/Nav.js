import React, { Component } from 'react';


// eslint-disable-next-line react/prefer-stateless-function
class Nav extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <header className="shadow__menu">
        <div className="topbar top__menu">
          <input type="checkbox" id="menuToggle" />
          <label htmlFor="menuToggle" className="menu__icon fa fa-bars fa-2x" />
          <nav className="navigation__menu">
            <ul>
              <a href="/"><li>Home</li></a>
              <a href="/products"><li>All Products</li></a>
              <a href="#"><li>About us</li></a>
              <a href="#"><li>Contact us</li></a>
              <a href="#"><li>Login/Sign Up</li></a>
            </ul>
          </nav>
        </div>

        <div className="topbar">
          <a href="/"><img className="logo" src="images/eclassic.png" alt="Eclassic logo" /></a>
        </div>
        <div className="topbar">
          <div className="cart__box">
            <i className="fa fa-shopping-bag fa-3x"><span>5</span></i>
            <div className="cart__total">150.55 $</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;
