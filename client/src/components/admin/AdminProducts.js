import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AdminSideNav from './AdminSideNav';
import Product from './AdminProductList';
import { deleteProduct, fetchAllProducts } from '../../actions/index';

const AdminProducts = ({ getAllProducts, products, onDelete }) => {
  useEffect(() => {
    getAllProducts();
  }, []);

  if (!products) {
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
                 !products.length
                  ? (
                    <tr><td>No product</td></tr>
                  )
                  : (
                    products.map(product => (
                      <Product product={product} onDelete={onDelete} />
                    ))
                  )
              }
            </tbody>

          </table>
        </div>

        <div className="pagination__div">
          <ul className="pagination">
            <li><a href="#" className="active">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">&gt;</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = ({ products }) => ({ products });
const mapDispatchToProps = dispatch => ({
  onDelete: (id) => {
    dispatch(deleteProduct(id));
  },
  getAllProducts: () => {
    dispatch(fetchAllProducts());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProducts);
