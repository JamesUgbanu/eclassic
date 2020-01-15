import React from 'react';


export default ({ product, onDelete }) => {
    
  return (
    <tr key={product.prod_id}>
    <td>{product.prod_id}</td>
    <td>{product.short_desc}</td>
    <td>{product.quantity}</td>
    <td>{product.price}</td>
    <td>{product.prod_name}</td>
      <td className="action__btn">
        <button>view&edit</button>
        <button onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) onDelete(product.prod_id)}}>
            delete
        </button>
      </td>
    </tr>
  );
};