import React from 'react';
import Left from './LeftNav';

// eslint-disable-next-line react/prefer-stateless-function
const Checkout = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <main className="container__page">
    <Left />
    <div className="cloth_text">
      <h1>Lorem ipsum</h1>
      <p>Fill Information correctly</p>
    </div>
    <div className="acc__container">
      <h1>Shipping Information</h1>
      <form className="form__control">
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
        <input type="submit" value="PAY NOW - $1000" />
      </form>
    </div>
  </main>
);

export default Checkout;
