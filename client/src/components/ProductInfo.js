import React, { Component } from 'react';

class ProductInfo extends Component {
    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    };

    render() {
      const { values, handleChange } = this.props;
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
              <input type="text" placeholder="Nike shoe"
              onChange={handleChange('productName')}
              value={values.productName}
              />
            </div>
            <div className="section__box">
              <label>SK</label>
              <input type="text" placeholder="00345675"
              onChange={handleChange('sku')}
              value={values.sku}
              />
            </div>
            <div className="section__box">
              <label>Description</label>
              <textarea onChange={handleChange('description')}
              value={values.description}
               />
            </div>
          </div>
        </div>

      );
    }
}
export default ProductInfo;
