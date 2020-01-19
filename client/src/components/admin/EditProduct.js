import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSideNav from './AdminSideNav';
import ProductForm from '../ProductForm';

// eslint-disable-next-line react/prefer-stateless-function
class EditProduct extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <main className="acc__main">
        <AdminSideNav />
        <div className="acc__container">
          <h1>
            <a href="/admin-products" className="fa  fa-arrow-left" />
                Back to Products
          </h1>
          <ProductForm initialValues={this.props.currentProduct} />
        </div>
      </main>
    );
  }
}

// Find current product based on ID passed in URL
const findCurrentProduct = (products, id = -1) =>
  // Find product for given id
  products.find(product => parseInt(product.prod_id, 10) === parseInt(id, 10));
const mapStateToProps = (state, ownProps) => {
  const currentProduct = state.products.length ? findCurrentProduct(state.products, ownProps.match.params.id) : null;
  return {
    currentProduct,
    ajaxLoading: state.ajaxLoading,
    goBack: ownProps.history.goBack
  };
};

export default connect(mapStateToProps, null)(EditProduct);
