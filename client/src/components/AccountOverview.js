import React, { Component } from 'react';
import SideNav from './SideNav';

// eslint-disable-next-line react/prefer-stateless-function
class AccountOverview extends Component {

  render() {
    
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <main className="acc__main">
        <SideNav auth={this.props.auth} />
        <div className="acc__container">
          <h1>Acount Overview</h1>
          <div className="acc__details">
            <div className="acc__details__head">
                ACCOUNT DETAIL
              <a href="/account-details"><i className="fas fa-pencil-alt" /></a>
            </div>
            <div className="acc__details__body">
              <p>james</p>
              <em>example@gmail.com</em>
            </div>
            <div className="acc__details__footer">
              <a href="#">CHANGE PASSWORD</a>
            </div>
          </div>
          <div className="acc__details">
            <div className="acc__details__head">
                ADDRESS BOOK
              <a href="/address-book"><i className="fas fa-pencil-alt" /></a>
            </div>
            <div className="acc__details__body">
              <p>Your Shipping addres:</p>
              <em>20 Oyedele Street, Off Liasu rd, Ikotun Egbe Lagos</em>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default AccountOverview;
