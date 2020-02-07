import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';

// eslint-disable-next-line react/prefer-stateless-function
class AccountDetails extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <main className="acc__main">
        <SideNav />
        <div className="acc__container">
          <h1>
            <Link to="/account-overview" className="fa  fa-arrow-left" />
                Detail
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
                <label className="dtail__label">EMAIL</label>
                <span>singlecliq@gmail.com</span>
              </div>
              <div className="form__field">
                <label className="dtail__label">Prefix</label>
                <label>+234</label>
                <input className="input__phone" type="tel" name="" placeholder="Phone Number(optional)" />
              </div>
            </div>
            <div className="form__two__grid">
              <div className="form__field">
                <label className="dtail__label">GENDER(OPTIONAL)</label>
                <select>
                  <option>MALE</option>
                  <option>FEMALE</option>
                </select>
              </div>
              <div className="form__field">
                <label className="dtail__label">Birthday(optional)</label>
                <input type="date" name="name" placeholder="mm/yyyy/dd" />
              </div>
            </div>
            <input type="submit" value="SAVE" />
          </form>
        </div>
      </main>
    );
  }
}

export default AccountDetails;
