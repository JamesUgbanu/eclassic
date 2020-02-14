import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductList = ({
  products
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
          <img src={product.image_url[0]} alt={product.prod_name} />
          <hr />
          <p>
            {product.prod_name}
            <span className="price">${product.price}</span>
            </p>
          <Link to={`product/${product.prod_name}/${product.prod_id}`}>View Product <span className="fa fa-eye fa-1x" /></Link>
        </div>
      ))
    )
);

ProductList.propTypes = {
  products: PropTypes.array
};

export default ProductList;
