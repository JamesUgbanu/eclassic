import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminSideNav from './AdminSideNav';
import ProductForm from '../ProductForm';

// eslint-disable-next-line react/prefer-stateless-function
class AddProduct extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <main className="acc__main">
        <AdminSideNav />
        <div className="acc__container">
          <h1>
            <Link to="/admin-products" className="fa  fa-arrow-left" />
                Product Table
          </h1>
            <ProductForm />
        </div>
      </main>
    );
  }
}

export default AddProduct;
