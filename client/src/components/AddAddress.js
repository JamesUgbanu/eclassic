import React, { Component } from 'react';
import SideNav from './SideNav';

// eslint-disable-next-line react/prefer-stateless-function
class AddAddress extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <main className="acc__main">
        <SideNav />
        <div className="acc__container">
          <h1>
            <a href="/address-book" className="fa  fa-arrow-left" />
                Add new address
          </h1>
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
                <label className="dtail__label">Prefix</label>
                <label>+234</label>
                <input className="input__phone" type="tel" name="" placeholder="Phone Number" />
              </div>
              <div className="form__field">
                <label className="dtail__label">Prefix</label>
                <label>+234</label>
                <input className="input__phone" type="tel" name="" placeholder="Additional Phone Number" />
              </div>
            </div>

            <div className="form__one__grid">
              <div className="form__field">
                <textarea name="" placeholder="Address" />
              </div>
            </div>
            <div className="form__one__grid">
              <div className="form__field">
                <textarea name="" placeholder="Additional information" />
              </div>
            </div>
            <div className="form__two__grid">
              <div className="form__field">
                <label className="dtail__label">Region</label>
                <select>
                  <option>Lagos</option>
                  <option>Abuja</option>
                </select>
              </div>
              <div className="form__field">
                <label className="dtail__label">City</label>
                <select>
                  <option>Yaba</option>
                  <option>Lekki</option>
                </select>
              </div>
            </div>
            <input type="submit" value="SAVE" />
          </form>
        </div>
      </main>
    );
  }
}

export default AddAddress;
