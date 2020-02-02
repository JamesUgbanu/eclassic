import React from 'react';

const OrderList = ({ orders }) => (
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
            <a href={`/admin-order-details/${order.order_id}`}>
              {order.item.products ? order.item.products[0].prod_name : null}
...
            </a>
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
                <button>completed</button>
                <button>processing</button>
                <button>cancel</button>
              </div>
            </details>
          </td>
        </tr>
      ))
    )
);

export default OrderList;
