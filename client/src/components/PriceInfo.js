import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PriceInfo extends Component {
    continue = () => {
      const { errorMsg, nextStep } = this.props;
      if (errorMsg.fieldValid('beforePrice') && errorMsg.fieldValid('afterPrice') && errorMsg.fieldValid('discount')) {
        nextStep();
      } else {
        errorMsg.showMessages();
        // rerender to show messages for the first time
        // you can use the autoForceUpdate option to do this automatically`
        this.forceUpdate();
      }
    };

    previous = () => {
      this.props.prevStep();
    };

    render() {
      const { values, handleChange, errorMsg } = this.props;
      return (
        <div className="tab__page">
          <div className="tab__button">
            <button onClick={this.previous}>
              <i className="fas fa-arrow-left" />
                    Previous
            </button>
            <button onClick={this.continue}>
                    continue
              <i className="fas fa-arrow-right" />
            </button>
          </div>
          <h1>Price Information</h1>
          <hr />
          <div className="tab__form">
            <div className="section__box">
              <legend>Before Price</legend>
              <input
                type="text"
                onChange={handleChange('beforePrice')}
                value={values.beforePrice}
              />
            </div>
            {errorMsg.message('beforePrice', values.beforePrice, 'required|currency')}
            <div className="section__box">
              <legend>After Price</legend>
              <input
                type="text"
                onChange={handleChange('afterPrice')}
                value={values.afterPrice}
              />
            </div>
            {errorMsg.message('afterPrice', values.afterPrice, 'required|currency')}
            <div className="section__box">
              <legend>Discount in %</legend>
              <input
                type="number"
                onChange={handleChange('discount')}
                value={values.discount}
              />
            </div>
            {errorMsg.message('discount', values.discount, 'required|integer|min:0|max:100')}
          </div>
        </div>

      );
    }
}

PriceInfo.propTypes = {
  errorMsg: PropTypes.object,
  nextStep: PropTypes.func
};
export default PriceInfo;
