import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductInfo extends Component {
    continue = () => {
      const { errorMsg, nextStep } = this.props;
      if (errorMsg.fieldValid('productName') && errorMsg.fieldValid('sku') && errorMsg.fieldValid('description')) {
        nextStep();
      } else {
        errorMsg.showMessages();
        // rerender to show messages for the first time
        // you can use the autoForceUpdate option to do this automatically`
        this.forceUpdate();
      }
    };

    render() {
      const {
        values, handleChange, errorMsg
      } = this.props;
      return (
        <div className="tab__page">
          <div className="tab__button">
            <button onClick={this.continue}>
            Continue
              <i className="fas fa-arrow-right" />
            </button>
          </div>
          <h1>Product Information</h1>
          <hr />
          <div className="tab__form">
            <div className="section__box">
              <label>Name</label>
              <input
                type="text"
                placeholder="Nike shoe"
                onChange={handleChange('productName')}
                value={values.productName}
              />
            </div>
            {errorMsg.message('productName', values.productName, 'required|alpha_num_space')}
            <div className="section__box">
              <label>SK</label>
              <input
                type="text"
                placeholder="00345675"
                onChange={handleChange('sku')}
                value={values.sku}
              />
            </div>
            {errorMsg.message('sku', values.sku, 'required|alpha_num')}
            <div className="section__box">
              <label>Description</label>
              <textarea
                onChange={handleChange('description')}
                value={values.description}
              />
            </div>
            {errorMsg.message('description', values.description, 'required|alpha_num_dash_space|min:20|max:120')}
          </div>
        </div>

      );
    }
}

ProductInfo.propTypes = {
  errorMsg: PropTypes.object,
  nextStep: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.object

};
export default ProductInfo;
