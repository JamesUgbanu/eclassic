import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Left from './LeftNav';
import { getCartTotal, getQuantity } from './helpers';
import { addOrder } from '../actions/index';
// eslint-disable-next-line react/prefer-stateless-function
const Checkout = ({ cart, orderAction }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <main className="container__checkout__page">
    <Left />
    <div className="container__box">
      <div className="acc__container">
      <h1 className="bg__header">Shipping Information</h1>
      <div className="form__control">
        <div className="form__two__grid">
          <div className="form__field">
            <label className="dtail__label">FIRST NAME</label>
            <input type="text" name="name" placeholder="james" />
          </div>
          <div className="form__field">
            <label className="dtail__label">LAST NAME</label>
            <input type="text" name="name" placeholder="ugbanu" />
          </div>
        </div>
        <div className="form__two__grid">
          <div className="form__field">
            <label className="dtail__label">EMAIL</label>
            <span>singlecliq@gmail.com</span>
          </div>
          <div className="form__field">
            <label className="dtail__label">Prefix</label>
            <label>+234</label>
            <input className="input__phone" type="tel" name="" placeholder="Phone Number(optional)" />
          </div>
        </div>
        <div className="form__one__grid">
          <div className="form__field">
            <textarea name="" placeholder="Address" />
          </div>
        </div>

      </div>
    </div>
    </div>
    <div className="form__control checkout__product">
      <table cellSpacing="20">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          { !cart.length
            ? (
              <Redirect to="/products" />
            )
            : (
              cart.map(cartItem => (
                <tr key={cartItem.prod_id}>
                  <td>{cartItem.prod_name}</td>
                  <td>{cartItem.price * cartItem.cartQuantity}</td>
                  <td>{cartItem.cartQuantity}</td>
                </tr>
              ))
            )
            }
          <tr>
            <td />
            <td />
            <td>{getQuantity(cart)}</td>
          </tr>
          <tr>
            <td />
            <td />
          </tr>
          <tr className="checkout__amount">
            <td>To Pay</td>
            <td>
                  $
              {getCartTotal(cart)}
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => orderAction({ total_prize: getCartTotal(cart), item: { products: cart } })}>
          PAY NOW - $
        {getCartTotal(cart)}
      </button>
    </div>
  </main>
);

Checkout.propTypes = {
  cart: PropTypes.array,
  orderAction: PropTypes.func
};

const mapStateToProps = state => ({
  cart: state.cart
});
const mapDispatchToProps = dispatch => ({
  orderAction: (data) => {
    dispatch(addOrder(data));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
