import React from 'react';
import { connect } from 'react-redux';
import { getCartTotal } from './helpers';
import Left from './LeftNav';
import CartList from './CartList';
import { removeFromCart, updateQantity } from '../actions/index';

// eslint-disable-next-line react/prefer-stateless-function
const Cart = ({ cart, removeCart, updateQantity }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <main className="container__section">
    <Left />
    <div className="container__box cart__items">
      <h1>Cart</h1>
      <p>Here you can check your order with futher confirmation and payment</p>
      <CartList cartItems={cart} removeCart={removeCart} updateQantity={updateQantity} />
      <div className="back__to__product">
        <a href="/products">
          <i className="fa fa-arrow-left" />
Back to product
        </a>
      </div>
    </div>
    <div className="container__box">

      <div className="quantity">
        <table cellSpacing="20">
          <tbody>
            <tr>
              <td>Quantity</td>
              <td>5</td>
            </tr>
            <tr>
              <td />
              <td />
            </tr>
            <tr>
              <td />
              <td />
            </tr>
            <tr>
              <td>To Pay</td>
              <td>
$
                {getCartTotal(cart)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button>
Checkout
        <i className="fa fa-arrow-right fa-1x" />
        <span className="amount__btn">
$
          {getCartTotal(cart)}
        </span>
      </button>
    </div>
  </main>
);

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  removeCart: (id, name) => {
    dispatch(removeFromCart(id, name));
  },
  updateQantity: (change, item) => {
    dispatch(updateQantity(change, item));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
