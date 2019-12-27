import React, { Component } from 'react';
import SideNav from './SideNav';

// eslint-disable-next-line react/prefer-stateless-function
class OrderDetails extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <main className="acc__main">
        <SideNav />
        <div className="acc__container order__details">
          <h1>
            <a href="/order" className="fa  fa-arrow-left" />
                Order details
          </h1>
          <div className="order__list">
            <p>Order nº 355775598</p>
            <p>1 Items</p>
            <p>Placed on 11-11-2019</p>
            <h4>Total: ₦ 8,242</h4>
          </div>
          <div className="order__list">
            <div className="order__content order__img">
              <img src="./images/man-on-nike-sneaker.jpg" />
            </div>
            <div className="order__content order__text">
              <p>Xiaomi xi band the best of the best </p>
              <h4>status: UNSUCESSFUL PAYMENT-CANCEL</h4>
            </div>
          </div>
          <div className="order__list">
            <div className="order__content order__img">
              <img src="./images/man-on-nike-sneaker.jpg" />
            </div>
            <div className="order__content order__text">
              <p>Xiaomi xi band the best of the best </p>
              <h4>status: UNSUCESSFUL PAYMENT-CANCEL</h4>
            </div>
          </div>
          <div className="acc__details">
            <div className="acc__details__head">PAYMENT INFORMATION</div>
            <div className="acc__details__body">
              <p>james</p>
              <em>example@gmail.com</em>
            </div>
          </div>
          <div className="acc__details">
            <div className="acc__details__head">DELIVERY INFORMATION</div>
            <div className="acc__details__body">
              <p>Your Shipping addres:</p>
              <em>20 Oyedele Street, Off Liasu rd, Ikotun Egbe Lagos</em>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default OrderDetails;
