import React from 'react';
import Left from './LeftNav';

// eslint-disable-next-line react/prefer-stateless-function
const Checkout = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <main className="container__checkout__page">
    <Left />
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
    <div class="form__control checkout__product">
        <table cellSpacing="20">
          <tbody>
            <tr>
              <td>Puma</td>
              <td>$1000</td>
              <td>1</td>
            </tr>
            <tr>
              <td />
              <td />
            </tr>
            <tr class="checkout__amount">
              <td>To Pay</td>
              <td>
                  $1000
              </td>
            </tr>
          </tbody>
        </table>
      <input type="submit" value="PAY NOW - $1000" />
    </div>
  </main>
);

export default Checkout;
