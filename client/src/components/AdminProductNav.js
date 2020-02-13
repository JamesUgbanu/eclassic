import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
const AdminProductNav = ({ step }) => (
  <div className="product__tab">
    <div className={`tab__content ${step === 1 ? 'active' : ''}`}>
      <i className="fas fa-info-circle" />
      <span>Information</span>
    </div>

    <div className={`tab__content ${step === 2 ? 'active' : ''}`}>
      <i className="fas fa-dollar-sign" />
      <span>Price</span>
    </div>
    <div className={`tab__content ${step === 3 ? 'active' : ''}`}>
      <i className="fas fa-file" />
      <span>Quantities</span>
    </div>
    <div className={`tab__content ${step === 4 ? 'active' : ''}`}>
      <i className="fas fa-image" />
      <span>images</span>
    </div>
  </div>
);

AdminProductNav.propTypes = {
  step: PropTypes.number
};

export default AdminProductNav;
