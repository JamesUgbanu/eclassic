import React, { Component } from 'react';

class PriceInfo extends Component {
    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    };
    previous = e => {
        e.preventDefault();
        this.props.prevStep();
      };

    render() {
        const { values, handleChange } = this.props;
      return (
        <div className="tab__page">
          <div className="tab__button">
          <button onClick={this.previous}>
              <i className="fas fa-arrow-left" />
                    Previous
            </button>
            <button onClick={this.continue}>
                    continue<i className="fas fa-arrow-right" />
            </button>
          </div>
          <h1>Price Information</h1>
          <hr />
          <div className="tab__form">
            <div className="section__box">
              <legend>Before Price</legend>
              <input type="text" 
               onChange={handleChange('beforePrice')}
               value={values.beforePrice}
               />
            </div>
            <div className="section__box">
              <legend>After Price</legend>
              <input type="text" 
              onChange={handleChange('afterPrice')} 
              value={values.afterPrice}
              />
            </div>
            <div className="section__box">
              <legend>Discount in %</legend>
              <input type="number"
               onChange={handleChange('discount')}
               value={values.discount}
               />
            </div>

          </div>
        </div>

      );
    }
}
export default PriceInfo;
