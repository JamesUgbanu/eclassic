import React, { Component } from 'react';
import SideNav from './SideNav';
import OrderList from './OrderList';
// eslint-disable-next-line react/prefer-stateless-function
class Order extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <main className="acc__main">
        <SideNav />
        <div className="acc__container">
          <h1>Orders(3)</h1>
          <OrderList />
        </div>
      </main>
    );
  }
}

export default Order;
