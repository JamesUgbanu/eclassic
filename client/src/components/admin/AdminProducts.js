import React from 'react';
import { connect } from 'react-redux';
import AdminSideNav from './AdminSideNav';
import Product from './AdminProductList';
import { deleteProduct } from '../../actions/index';

const AdminProducts = ({
  products, ajaxLoading, onDelete, currentPage, pages
}) => {
  if (ajaxLoading) {
    return (
      <div className="login__box">Loading...</div>
    );
  }
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <main className="acc__main">
      <AdminSideNav />
      <div className="acc__container">
        <div className="product__header">
          <span>Product</span>
          <a href="/add-product">Add a new</a>
        </div>
        <hr />

        <div className="product__form">
          <form>
            <div className="product__one">
              <label>Search:</label>
              <input type="search" name="search" />
            </div>

            <div className="product__two">
              <label>Filter by:</label>
              <input type="number" name="number" placeholder="all" />
            </div>

            <div className="product__three">
              <label>Order by:</label>
              <input type="number" name="number" placeholder="id" />
              <input className="joint__form" type="number" name="number" placeholder="Asc" />
            </div>

            <div className="product__four">
              <input type="submit" value="GO" />
            </div>
          </form>
        </div>
        <Product products={products} pages={pages} currentPage={currentPage} onDelete={onDelete} />
      </div>
    </main>
  );
};

// Generate list of products for given page number
const generateProductsByPage = (products, pageNo) => {
  // I assumed showing 10 products per page
  const perPage = 10;
  if (products.length) {
    // Filter 10 products by page number
    return products.filter((product, i) => i >= perPage * (pageNo - 1) && i < perPage * pageNo);
  }
  return [];
};

const mapStateToProps = (state, ownProps) => {
  // Set page number to 1 if no number in url params
  const pageNo = ownProps.match.params.pageNo || 1;
  const products = generateProductsByPage(state.products, pageNo);
  return {
    products,
    pages: Math.ceil(state.products.length / 10), // Determine number of pages for pagination
    currentPage: pageNo,
    ajaxLoading: state.ajaxLoading
  };
};

const mapDispatchToProps = dispatch => ({
  onDelete: (id) => {
    dispatch(deleteProduct(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProducts);
