import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';

const SideBar = ({ props, authenticate }) => (
  // Pass on our props
  <Menu {...props}>
        <Link to="/"><div>Home</div></Link>
        <Link to="/products"><div >All Products</div></Link>
        <Link to="#"><div >About us</div></Link>
        <Link to="#"><div >Contact us</div></Link>
        {authenticate.isAuthenticated() ? (
          <button className="auth__btn" onClick={authenticate.logout}>Logout</button>
        ) : (
          <button className="auth__btn" onClick={authenticate.login}>Log In/SignUp</button>
        )}
  </Menu>
);

SideBar.propTypes = {
  authenticate: PropTypes.object,
  props: PropTypes.array
};

export default SideBar;
