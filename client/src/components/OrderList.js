import React from 'react';

const OrderList = () => (
  <div className="order__list">
    <div className="order__content order__img">
      <img src="./images/man-on-nike-sneaker.jpg" />
    </div>
    <div className="order__content order__text">
      <p>Xiaomi xi band the best of the best </p>
      <p>placed on 11-11-2019</p>
      <h4>UNSUCESSFUL PAYMENT-CANCEL</h4>
      <a href="/order-details">SEE DETAILS</a>
    </div>
  </div>
)
export default OrderList;