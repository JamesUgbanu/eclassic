import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
          <ProductForm pageNo={this.props.pageNo} />
        </div>
      </main>
    );
  }
}

EditProduct.propTypes = {
  pagesNo: PropTypes.number
};
const mapStateToProps = (state, ownProps) => {
  return {
    pageNo: ownProps.match.params.id
  };
};

export default connect(mapStateToProps, null)(EditProduct);
