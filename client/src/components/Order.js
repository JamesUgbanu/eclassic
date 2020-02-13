import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import OrderList from './OrderList';
import { generateByPage } from './helpers';
import { fetchOrder } from '../actions/index';
import Pagination from './pagination';
import Loading from './Loading';
// eslint-disable-next-line react/prefer-stateless-function
const Order = ({ fetchUserOrder, orders, allOrders, pages, currentPage, ajaxLoading }) => {
  useEffect(() => {
    fetchUserOrder();
  }, []);
  if (ajaxLoading) {
    return (
      <Loading />
    );
  }
  return (
    <main className="acc__main">
      <SideNav />
      <div className="acc__container">
        <h1>
Orders(
          {allOrders}
)
        </h1>
        <OrderList orders={orders} />
        { /* show pagination if there are more than 1 page */
        pages > 1 && <Pagination pages={pages} currentPage={currentPage} currentUrl={'order'} />
    }
      </div>
    </main>
  );
};

Order.propTypes = {
  fetchUserOrder: PropTypes.array,
  orders: PropTypes.array,
  allOrders: PropTypes.array,
  pages: PropTypes.number,
  currentPage: PropTypes.number,
  ajaxLoading: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  // Set page number to 1 if no number in url params
  const pageNo = ownProps.match.params.pageNo || 1;
  const orders = generateByPage(state.order, pageNo, 5);
  return {
    orders,
    pages: Math.ceil(state.order.length / 5), // Determine number of pages for pagination
    currentPage: pageNo,
    ajaxLoading: state.ajaxLoading,
    allOrders: state.order.length
  };
};
const mapDispatchToProps = dispatch => ({
  fetchUserOrder: () => {
    dispatch(fetchOrder());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
