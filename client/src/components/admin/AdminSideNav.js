import React from 'react';

const AdminSideNav = () => (
  <aside>
      <div className="account__sidebar">
          <div className="account__sidebar__top">
              <a href="/admin-dashboard" className="dashboard__menu fas fa-box"><span>Dashboard</span></a>
              <a href="/admin-products/1" className="dashboard__menu fas fa-suitcase"><span>Products</span></a>
              <a href="/admin-order" className="dashboard__menu fas fa-dolly"><span>Orders</span></a>
              <a href="#" className="dashboard__menu"><span>Change Password</span></a>
            </div>
          <div className="account__sidebar__bottom">
              <button>Log Out</button>
            </div>
        </div>
      <div className="mobile__nav__container">
          <div className="mobile__nav active">
              <i className="fas fa-user" />
              <a href="/admin/dashboard" className="dashboard__mobile__menu">Account</a>
            </div>
          <div className="mobile__nav">
              <i className="fas fa-suitcase" />
              <a href="/admin/order" className="dashboard__mobile__menu">Orders</a>
            </div>
          <div className="mobile__nav">
                  <i className="fas fa-cart" />
                  <a href="/admin/products" className="dashboard__mobile__menu">Address Book</a>
                </div>
        </div>
    </aside>
);
export default AdminSideNav;
