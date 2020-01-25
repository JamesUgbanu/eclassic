import React from 'react';

export default ({
  products, pages, currentPage
}) => (
  !products.length
    ? (
      <div className="cloth_img">
        <p>Product not found</p>
      </div>
    )
    : (
      products.map((product) => (
        <div key={product.prod_id} className="cloth_img">
          <img src={JSON.parse(product.image_url)[0]} alt={product.prod_name} />
          <hr />
          <p>{product.prod_name}<span class="price">${product.price}</span></p>
          <a href={`product/${product.prod_name}/${product.prod_id}`}>View Product <span className="fa fa-eye fa-1x" /></a>
        </div>
      ))
    )
);
