import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const SideBar = ({props, authenticate}) => (
  // Pass on our props
  <Menu {...props}>
        <NavLink to="/"><div>Home</div></NavLink>
        <NavLink to="/products"><div activeClassName="active">All Products</div></NavLink>
        <NavLink to="about-us"><div activeClassName="active">About us</div></NavLink>
        <NavLink to="/contact-us"><div activeClassName="active">Contact us</div></NavLink>
        {authenticate.isAuthenticated() ? (
          <button className="auth__btn" onClick={authenticate.logout}>Logout</button>
        ) : (
          <button className="auth__btn" onClick={authenticate.login}>Log In/SignUp</button>
        )}
  </Menu>
);

export default SideBar;
