import React from 'react';
import Pagination from '../pagination';

export default ({
  products, onDelete, pages, currentPage
}) => (
  !products.length
    ? <p>Product not found</p>
    : (
      <div className="product__table">
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Amount</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
          products.map(product => (
            <tr key={product.prod_id}>
              <td>{product.prod_id}</td>
              <td>{product.short_desc}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.prod_name}</td>
              <td className="action__btn">
                <a href={`/edit-product/${product.prod_id}`}>view&edit</a>
                <button onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) onDelete(product.prod_id); }}>
                  delete
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        { /* show pagination if there are more than 1 page */
        pages > 1 && <Pagination pages={pages} currentPage={currentPage} />
    }
      </div>
    )
);
