import React from 'react';
import { connect } from 'react-redux';
import AdminSideNav from './AdminSideNav';

const AdminProducts = ({ products }) => {

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

              { !products.data && (
                  <tbody><tr><td><p>No products</p></td></tr></tbody>
              ) }
              { products.data && (
                <tbody>
                     <tr>
                     <td>7</td>
                     <td>Wireless Keyboard</td>
                     <td>4</td>
                     <td>$12</td>
                     <td>microsoft</td>
                     <td className="action__btn">
                     <button>view&edit</button>
                     <button>delete</button>
                   </td>
                   </tr>
                     <tr>
                   <td>8</td>
                   <td>Wireless Mouse</td>
                   <td>6</td>
                   <td>$24</td>
                   <td>manufacturer sample</td>
                   <td className="action__btn">
                     <button>view&edit</button>
                     <button>delete</button>
                   </td>
                 </tr>
                     <tr>
                   <td>10</td>
                   <td>Hacker Keyboard</td>
                   <td>8</td>
                   <td>$36</td>
                   <td>microsoft</td>
                   <td className="action__btn">
                     <button>view&edit</button>
                     <button>delete</button>
                   </td>
                 </tr>
                     <tr>
                   <td>11</td>
                   <td>Smart Watch</td>
                   <td>10</td>
                   <td>$48</td>
                   <td>panasonic</td>
                   <td className="action__btn">
                     <button>view&edit</button>
                     <button>delete</button>
                   </td>
                 </tr>
                     <tr>
                   <td>12</td>
                   <td>Webcam</td>
                   <td>12</td>
                   <td>$60</td>
                   <td>manufactue sample</td>
                   <td className="action__btn">
                     <button>view&edit</button>
                     <button>delete</button>
                   </td>
                 </tr>
                   </tbody>
              )}

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
  )
};

const mapStateToProps = ({ products }) => ({ products });

export default connect(
  mapStateToProps
)(AdminProducts);
