import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';
import { findCurrentItem } from './helpers';

// eslint-disable-next-line react/prefer-stateless-function
class OrderDetails extends Component {
  render() {
    const { ajaxLoading, currentOrder } = this.props;
    if (ajaxLoading || !currentOrder) {
      return (
        <div className="login__box">Loading...</div>
      );
    }
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <main className="acc__main">
        <SideNav />
        <div className="acc__container order__details">
          <h1>
            <Link to="/order" className="fa  fa-arrow-left" />
                Order details
          </h1>
          <div className="order__list">
            <p>
              {`Order nº ${currentOrder.order_id}`}
            </p>
            <p>{currentOrder.item.products.length === 1 ? '1 Item' : `${currentOrder.item.products.length} Items`}</p>
            <p>
              {`Placed on ${currentOrder.created_on}`}
            </p>
            <p>
              {`status: ${currentOrder.status}`}
              <span>
                {`    Total: ₦ ${currentOrder.total_prize}`}
              </span>
            </p>
          </div>
          { currentOrder.item.products.map(order => (
            <div key={order.order_id} className="order__list">
              <div className="order__content order__img">
                <img src={order.image_url[0]} />
              </div>
              <div className="order__content order__text">
                <p>{order.prod_name}</p>
              </div>
            </div>
          ))
  }
          <div className="acc__details">
            <div className="acc__details__head">PAYMENT INFORMATION</div>
            <div className="acc__details__body">
              <p>james</p>
              <em>example@gmail.com</em>
            </div>
          </div>
          <div className="acc__details">
            <div className="acc__details__head">DELIVERY INFORMATION</div>
            <div className="acc__details__body">
              <p>Your Shipping addres:</p>
              <em>20 Oyedele Street, Off Liasu rd, Ikotun Egbe Lagos</em>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const currentOrder = state.order.length ? findCurrentItem(state.order, ownProps.match.params.OrderId, true) : null;
  return {
    currentOrder,
    ajaxLoading: state.ajaxLoading
  };
};
export default connect(
  mapStateToProps,
  null
)(OrderDetails);
