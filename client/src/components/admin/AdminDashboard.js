import React, { Component } from 'react';
import { connect } from "react-redux";
import AdminSideNav from './AdminSideNav';

// eslint-disable-next-line react/prefer-stateless-function
class AdminDashboard extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <main className="acc__main">
        <AdminSideNav />
        <div className="acc__container admin__dashboard">
          <div className="dashboard__box dashboard__one">
            <p>User</p>
            <p>25</p>
            <div className="circle__one" />
            <div className="circle__two" />
          </div>

          <div className="dashboard__box dashboard__two">
            <p>New Order</p>
            <p>5</p>
            <div className="circle__one" />
            <div className="circle__two" />
          </div>

          <div className="dashboard__box dashboard__three">
            <p>All Products</p>
            <p>100</p>
            <div className="circle__one" />
            <div className="circle__two" />
          </div>
        </div>
      </main>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(AdminDashboard);
