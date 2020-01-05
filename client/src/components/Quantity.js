import React, { Component } from 'react';

class Quantity extends Component {
    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    };
    previous = (e) => {
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
                Continue
              <i className="fas fa-arrow-right" />
            </button>           
          </div>
          <h1>Quantity</h1>
          <hr />
          <div className="tab__form">
            <div className="section__box">
              <legend>quantity</legend>
              <input type="number" onChange={handleChange('quantity')}
              value={values.quantity}
               />
            </div>
          </div>
        </div>

      );
    }
}
export default Quantity;
