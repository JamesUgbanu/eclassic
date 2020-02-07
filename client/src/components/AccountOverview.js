import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SideNav from './SideNav';
import { fetchUserProfile } from '../actions/index';
// eslint-disable-next-line react/prefer-stateless-function
const AccountOverview = ({ fetchUser, auth, user }) => {
  useEffect(() => {
    fetchUser();
  }, []);
  // eslint-disable-next-line react/jsx-filename-extension
  return (
    <main className="acc__main">
      <SideNav auth={auth} />
      <div className="acc__container">
        <h1>Acount Overview</h1>
        <div className="acc__details">
          <div className="acc__details__head">
                ACCOUNT DETAIL
            <Link to="/account-details"><i className="fas fa-pencil-alt" /></Link>
          </div>
          <div className="acc__details__body">
  <p>{user.nickname}</p>
            <em>{user.email}</em>
          </div>
          <div className="acc__details__footer">
            <Link to="#">CHANGE PASSWORD</Link>
          </div>
        </div>
        <div className="acc__details">
          <div className="acc__details__head">
                ADDRESS BOOK
            <Link to="/address-book"><i className="fas fa-pencil-alt" /></Link>
          </div>
          <div className="acc__details__body">
            <p>Your Shipping addres:</p>
            <em>20 Oyedele Street, Off Liasu rd, Ikotun Egbe Lagos</em>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
  fetchUser: () => {
    dispatch(fetchUserProfile());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountOverview);
