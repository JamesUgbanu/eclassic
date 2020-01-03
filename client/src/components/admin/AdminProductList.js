import React from 'react';


export default ({ product }) => {
  return (
    <tr>
    <td>{product.prod_id}</td>
    <td>{product.short_desc}</td>
    <td>{product.quantity}</td>
    <td>{product.price}</td>
    <td>{product.prod_name}</td>
      <td className="action__btn">
        <button>view&edit</button>
        <button>delete</button>
      </td>
    </tr>
  );
};