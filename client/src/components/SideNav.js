import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
const SideNav = () => (

  // eslint-disable-next-line react/jsx-filename-extension
  <aside>
    <div className="account__sidebar">
      <div className="account__sidebar__top">
        <a href="/account-overview" className="dashboard__menu fas fa-user active"><span>Account</span></a>
        <a href="/order" className="dashboard__menu fas fa-suitcase"><span>Orders</span></a>
        <a href="/address-book" className="dashboard__menu"><span>Address Book</span></a>
        <a href="#" className="dashboard__menu"><span>Change Password</span></a>
      </div>
        {/* <div className="account__sidebar__bottom">
        <button>Log Out</button>
      </div>     */}
    </div>
    <div className="mobile__nav__container">
      <div className="mobile__nav active">
        <i className="fas fa-user" />
        <a href="/account-overview" className="dashboard__mobile__menu">Account</a>
      </div>
      <div className="mobile__nav">
        <i className="fas fa-suitcase" />
        <a href="/order" className="dashboard__mobile__menu">Orders</a>
      </div>
      <div className="mobile__nav">
        <i className="fas fa-book" />
        <a href="/address-book" className="dashboard__mobile__menu">Address Book</a>
      </div>
    </div>
  </aside>
);

export default SideNav;
