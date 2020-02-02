import React from 'react';
import { connect } from 'react-redux';
import Left from './LeftNav';
import { generateByPage } from './helpers';
import ProductList from './ProductList';
import Loading from './Loading';
// eslint-disable-next-line react/prefer-stateless-function
const Products = ({
  products, currentPage, pages, ajaxLoading
}) => {
  if (ajaxLoading) {
    return (
      <Loading />
    );
  }
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <main className="container__page">
      <Left />
      <div className="cloth_text">
        <h1>ALL CLOTHES</h1>
        <p>Lovely collections for you</p>
      </div>
      <div className="product__container">
        <ProductList products={products} pages={pages} currentPage={currentPage} />
      </div>
    </main>
  );
};

const mapStateToProps = (state, ownProps) => {
  // Set page number to 1 if no number in url params
  const pageNo = ownProps.match.params.pageNo || 1;
  const products = generateByPage(state.products, pageNo, 10);
  return {
    products,
    pages: Math.ceil(state.products.length / 10), // Determine number of pages for pagination
    currentPage: pageNo,
    ajaxLoading: state.ajaxLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(Products);
