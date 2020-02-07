import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
const SideNav = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <aside>
    <div className="account__sidebar">
      <div className="account__sidebar__top">
        <NavLink to="/account-overview" className="dashboard__menu fas fa-user" activeClassName="active"><span>Account</span></NavLink>
        <NavLink to="/order" className="dashboard__menu fas fa-suitcase" activeClassName="active"><span>Orders</span></NavLink>
        <NavLink to="/address-book" className="dashboard__menu" activeClassName="active"><span>Address Book</span></NavLink>
      </div>
        {/* <div className="account__sidebar__bottom">
        <button>Log Out</button>
      </div>     */}
    </div>
    <div className="mobile__nav__container">
      <div className="mobile__nav active">
        <i className="fas fa-user" />
        <NavLink to="/account-overview" className="dashboard__mobile__menu">Account</NavLink>
      </div>
      <div className="mobile__nav">
        <i className="fas fa-suitcase" />
        <NavLink to="/order" className="dashboard__mobile__menu">Orders</NavLink>
      </div>
      <div className="mobile__nav">
        <i className="fas fa-book" />
        <NavLink to="/address-book" className="dashboard__mobile__menu">Address Book</NavLink>
      </div>
    </div>
  </aside>
);

export default SideNav;
