import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AdminSideNav from './AdminSideNav';
import { generateByPage, SearchItems } from '../helpers';
import { fetchAllOrder, changeOrderStatus } from '../../actions/index';
import AdminOrderList from '../AdminOrderList';
import Pagination from '../pagination';
import Loading from '../Loading';

// eslint-disable-next-line react/prefer-stateless-function
const AdminOrder = ({
  orders, pages, currentPage, allOrders, ajaxLoading, status, orderStatusChange, fetchAllOrder
}) => {
  useEffect(() => {
    fetchAllOrder();
  }, []);

  if (ajaxLoading) {
    return (
      <Loading />
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
          <NavLink to="/admin-order" className={!status ? 'active__status' : null}>
                All
            <span>
(
              {allOrders}
)
            </span>
          </NavLink>
                |
          <NavLink to="?status=processing" className={status === 'processing' ? 'active__status' : null}>
            processing
            <span />
          </NavLink>
                |
          <NavLink to="?status=completed" className={status === 'completed' ? 'active__status' : null}>
            completed
            <span />
          </NavLink>
                |
          <NavLink to="?status=cancelled" className={status === 'cancelled' ? 'active__status' : null}>
            cancelled
            <span />
          </NavLink>
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
              <AdminOrderList orders={orders} orderStatusChange={orderStatusChange} />
            </tbody>
          </table>
        </div>
        { /* show pagination if there are more than 1 page */
        pages > 1 && (
        <Pagination
          pages={pages}
          currentPage={currentPage}
          currentUrl="admin-order"
        />
        )
    }
      </div>
    </main>
  );
};

const mapStateToProps = (state, ownProps) => {
  // Set page number to 1 if no number in url params
  const params = new URLSearchParams(ownProps.location.search);
  const status = params.get('status');
  const pageNo = ownProps.match.params.pageNo || 1;
  const orders = generateByPage(SearchItems(state.adminOrder, status), pageNo, 10);
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
  },
  orderStatusChange: (data) => {
    dispatch(changeOrderStatus(data));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminOrder);
