import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Quantity extends Component {
    continue = () => {
      const { errorMsg, nextStep } = this.props;
      if (errorMsg.fieldValid('quantity')) {
        nextStep();
      } else {
        errorMsg.showMessages();
        // rerender to show messages for the first time
        // you can use the autoForceUpdate option to do this automatically`
        this.forceUpdate();
      }
    };

    previous = () => {
      const { prevStep } = this.props;
      prevStep();
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
                Continue
              <i className="fas fa-arrow-right" />
            </button>
          </div>
          <h1>Quantity</h1>
          <hr />
          <div className="tab__form">
            <div className="section__box">
              <legend>quantity</legend>
              <input
                type="number"
                onChange={handleChange('quantity')}
                value={values.quantity}
              />
            </div>
            {errorMsg.message('quantity', values.quantity, 'required|integer')}
          </div>
        </div>

      );
    }
}

Quantity.propTypes = {
  values: PropTypes.object,
  handleChange: PropTypes.func,
  errorMsg: PropTypes.object,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func
};

export default Quantity;
