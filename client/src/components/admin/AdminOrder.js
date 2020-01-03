import React, { Component } from 'react';
import AdminSideNav from './AdminSideNav';

// eslint-disable-next-line react/prefer-stateless-function
class AdminOrder extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <main className="acc__main">
        <AdminSideNav />
        <div className="acc__container">
          <div className="product__header">
            <span>Orders</span>
          </div>
          <hr />
          <div className="admin__sortable">
            <a href="#">
                All
              <span>(20)</span>
            </a>
                |
            <a href="#">
            processing
              <span>(18)</span>
            </a>
                |
            <a href="#">
            delivered
              <span>(2)</span>
            </a>
                |
            <a href="#">
            cancelled
              <span>(0)</span>
            </a>
          </div>
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
                <th>Order</th>
                <th>Purchased</th>
                <th>Ship to</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>
                  <a href="#">Wireless Keyboard</a>
                    by James
                </td>
                <td>1 item</td>
                <td>Location and address, Lagos</td>
                <td>May 29th 2020</td>
                <td>$12</td>
                <td>Pending</td>
                <td className="action__dropdown">
                  <details>
                    <summary className="fas fa-eye" />
                    <div className="dropdown__button">
                      <button>completed</button>
                      <button>processing</button>
                      <button>cancel</button>
                    </div>
                  </details>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <a href="#">Wireless Keyboard</a>
                    by James
                </td>
                <td>1 item</td>
                <td>Location and address, Lagos</td>
                <td>May 29th 2020</td>
                <td>$12</td>
                <td>Pending</td>
                <td className="action__dropdown">
                  <details>
                    <summary><div className="fas fa-eye" /></summary>
                    <div className="dropdown__button">
                      <button>completed</button>
                      <button>going</button>
                      <button>action</button>
                    </div>
                  </details>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <a href="#">Wireless Keyboard</a>
                    by James
                </td>
                <td>1 item</td>
                <td>Location and address, Lagos</td>
                <td>May 29th 2020</td>
                <td>$12</td>
                <td>Pending</td>
                <td className="action__dropdown">
                  <details>
                    <summary><div className="fas fa-eye" /></summary>
                    <div className="dropdown__button">
                      <button>completed</button>
                      <button>going</button>
                      <button>action</button>
                    </div>
                  </details>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <a href="#">Wireless Keyboard</a>
                    by James
                </td>
                <td>1 item</td>
                <td>Location and address, Lagos</td>
                <td>May 29th 2020</td>
                <td>$12</td>
                <td>Pending</td>
                <td className="action__dropdown">
                  <details>
                    <summary><div className="fas fa-eye" /></summary>
                    <div className="dropdown__button">
                      <button>completed</button>
                      <button>going</button>
                      <button>action</button>
                    </div>
                  </details>
                </td>
              </tr>
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
  }
}

export default AdminOrder;
