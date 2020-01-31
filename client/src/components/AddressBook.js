import React from 'react';
import SideNav from './SideNav';

// eslint-disable-next-line react/prefer-stateless-function
const AddressBook = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <main className="acc__main">
    <SideNav />
    <div className="acc__container">
      <h1>
            Address Book
        <a href="/add-address" className="address__book__btn">Add Address</a>
      </h1>
      <div className="acc__details">
        <div className="acc__details__head">
                James Ugbanu
          <a href="/add-address"><i className="fas fa-pencil-alt" /></a>
        </div>
        <div className="acc__details__body">
          <p>Address</p>
          <em>08066428001</em>
        </div>
      </div>
    </div>
  </main>
);

export default AddressBook;
