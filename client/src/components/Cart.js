import React, { Component } from 'react';
import Left from './LeftNav';

// eslint-disable-next-line react/prefer-stateless-function
class Cart extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
    <main className="container__section">
        <Left />
        <div class="container__box cart__items">
            <h1>Cart</h1>
            <p>here you can check your order with futher confirmation and payment</p>
            <div class="l_box">
            <img src="./images/lady-on-nike-sneaker.jpg" />
            <table cellpadding="6">
                <tr><th width="200">New Product</th> <th>Size</th><th>Quantity</th> <th>Cost</th></tr>
                <tr><td>Modern Line</td><td>M</td>
                    <td>
                    <form>
                    <div class="value-button" id="decrease">-</div>
                            <input type="number" id="number" value="0" />
                            <div class="value-button" id="increase">+</div>
                        </form>
                    </td><td>52.99$</td></tr>
            </table>
            <div class="remove__btn fa fa-times" />
            </div>
             <div class="back__to__product"><a href="#"><i class="fa fa-arrow-left"></i>Back to product</a></div>                                           
            </div>
            <div class="container__box">

            <div class="quantity">
        <table cellspacing="20">
                <tr><td>Quantity</td> <td >5</td></tr>
                <tr><td>Total</td> <td >134.48$</td></tr>
                <tr><td>Discount</td> <td>-5.33</td></tr>
                <tr><td></td> <td></td></tr>
                <tr><td></td> <td></td></tr>
                <tr><td>To Pay</td> <td>119.48$</td></tr>
        </table>
            </div>
            <button>Checkout <i class="fa fa-arrow-right fa-1x"></i><span class="amount__btn">$25000</span></button>
        </div>
    </main>
    );
  }
}

export default Cart;
