import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSideNav from './AdminSideNav';
import { generateByPage, SearchItems } from '../helpers';
import { fetchAllOrder } from '../../actions/index';
import AdminOrderList from '../AdminOrderList';
import Pagination from '../pagination';

// eslint-disable-next-line react/prefer-stateless-function
class AdminOrder extends Component {
  componentDidMount() {
    this.props.fetchAllOrder();
  }

  render() {
    const {
      orders, pages, currentPage, allOrders, ajaxLoading, status
    } = this.props;

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
            <span>Orders</span>
          </div>
          <hr />
          <div className="admin__sortable">
            <a href="/admin-order" className={!status ? 'active' : null}>
                All
              <span>
(
                {allOrders}
)
              </span>
            </a>
                |
            <a href="?status=open" className={status === 'open' ? 'active' : null}>
            processing
              <span></span>
            </a>
                |
            <a href="?status=delivered" className={status === 'delivered' ? 'active' : null}>
            delivered
              <span></span>
            </a>
                |
            <a href="?status=cancelled" className={status === 'cancelled' ? 'active' : null}>
            cancelled
              <span></span>
            </a>
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
                <AdminOrderList orders={orders} />
              </tbody>
            </table>
          </div>
          { /* show pagination if there are more than 1 page */
        pages > 1 && <Pagination pages={pages} currentPage={currentPage} currentUrl="admin-order" />
    }
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // Set page number to 1 if no number in url params
  const params = new URLSearchParams(ownProps.location.search);
  const status = params.get('status');
  const pageNo = ownProps.match.params.pageNo || 1;
  const orders = generateByPage(SearchItems(state.adminOrder, status), pageNo, 10);
  console.log(pageNo);
  return {
    orders,
    pages: Math.ceil(state.adminOrder.length / 10), // Determine number of pages for pagination
    currentPage: pageNo,
    ajaxLoading: state.ajaxLoading,
    status,
    allOrders: state.adminOrder.length
  };
};
const mapDispatchToProps = dispatch => ({
  fetchAllOrder: () => {
    dispatch(fetchAllOrder());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminOrder);
