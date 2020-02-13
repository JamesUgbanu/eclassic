import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const OrderList = ({ orders, orderStatusChange }) => (
  !orders.length
    ? (
      <tr>
        <td>
          No Order
        </td>
      </tr>
    ) : (
      orders.map((order, index) => (
        <tr key={order.order_id}>
          <td>{index+1}</td>
          <td>
            <NavLink to={`/admin-order-details/${order.order_id}`}>
              {order.item.products ? order.item.products[0].prod_name : null}
...
            </NavLink>
          by James
          </td>
          <td>
            { order.item.products ? order.item.products.length : null}
item(s)
          </td>
          <td>Location and address, Lagos</td>
          <td>{order.created_on}</td>
      <td>{`$${order.total_prize}`}</td>
          <td>{order.status}</td>
          <td className="action__dropdown">
            <details>
              <summary className="fas fa-eye" />
              <div className="dropdown__button">
                <button onClick={() => orderStatusChange({id: order.order_id, status: 'completed'})}>completed</button>
                <button onClick={() => orderStatusChange({id: order.order_id, status: 'processing'})}>processing</button>
                <button onClick={() => orderStatusChange({id: order.order_id, status: 'cancelled'})}>cancel</button>
              </div>
            </details>
          </td>
        </tr>
      ))
    )
);

OrderList.propTypes = {
  orders: PropTypes.array,
  orderStatusChange: PropTypes.func
};

export default OrderList;
