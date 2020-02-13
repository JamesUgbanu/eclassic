import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const OrderList = ({ orders }) => (
  !orders.length
    ? (
      <div className="order__list">
        <div className="order__content order__text">
          <p>No Order</p>
        </div>
      </div>
    ) : (
      orders.map(order => (
        <div key={order.order_id} className="order__list">
          <div className="order__content order__img">
            <img src={order.item.products[0].image_url[0]} />
          </div>
          <div className="order__content order__text">
      <p>{order.item.products.length} product(s) - {order.item.products[0].prod_name}...</p>
      <p>placed on {order.created_on}</p>
      <h4>{order.status}</h4>
            <NavLink to={`/order-details/${order.order_id}`}>SEE DETAILS</NavLink>
          </div>
        </div>
      ))
    )
);

OrderList.propTypes = {
  orders: PropTypes.array
};

export default OrderList;
