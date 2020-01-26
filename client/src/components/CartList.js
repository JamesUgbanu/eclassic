import React from 'react';

export default ({
  cartItems, removeCart, updateQantity
}) => (
  !cartItems.length
    ? (
      <div>
        <p>No Item in cart</p>
      </div>
    )
    : (
      cartItems.map(cartItem => (
        <div key={cartItem.prod_id} className="l_box">
          <img src={cartItem.image_url[0]} alt={cartItem.prod_name} />
          <table cellPadding="6">
            <thead>
              <tr>
                <th width="200">New Product</th>
                <th>Quantity</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {cartItem.prod_name}
                </td>
                <td>
                  <div className="value-button" onClick={() => updateQantity('decrement', cartItem)}>-</div>
                  <input type="number" defaultValue="1" />
                  <div className="value-button" onClick={() => updateQantity('increment', cartItem)}>+</div>
                </td>
                <td>
$
                  {cartItem.price}
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => removeCart(cartItem.prod_id, cartItem.prod_name)} className="remove__btn fa fa-times" />
        </div>
      ))
    )
);
