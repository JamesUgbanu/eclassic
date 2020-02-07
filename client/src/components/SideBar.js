import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const SideBar = ({props, authenticate}) => (
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

export default SideBar;
