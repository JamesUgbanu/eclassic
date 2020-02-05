import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSideNav = () => (
  <aside>
      <div className="account__sidebar">
          <div className="account__sidebar__top">
              <NavLink to="/admin-dashboard" className="dashboard__menu fas fa-box"><span>Dashboard</span></NavLink>
              <NavLink to="/admin-products" className="dashboard__menu fas fa-suitcase"><span>Products</span></NavLink>
              <NavLink to="/admin-order" className="dashboard__menu fas fa-dolly"><span>Orders</span></NavLink>
              <NavLink to="/change-password" className="dashboard__menu"><span>Change Password</span></NavLink>
            </div>
          {/* <div className="account__sidebar__bottom">
              <button>Log Out</button>
            </div> */}
        </div>
      <div className="mobile__nav__container">
          <div className="mobile__nav active">
              <i className="fas fa-user" />
              <NavLink to="/admin-dashboard" className="dashboard__mobile__menu">Account</NavLink>
            </div>
          <div className="mobile__nav">
              <i className="fas fa-suitcase" />
              <NavLink to="/admin-order" className="dashboard__mobile__menu">Orders</NavLink>
            </div>
          <div className="mobile__nav">
                  <i className="fas fa-cart" />
                  <NavLink to="/admin-products" className="dashboard__mobile__menu">Address Book</NavLink>
                </div>
        </div>
    </aside>
);
export default AdminSideNav;
