/* eslint-disable default-case */
import React, { Component } from 'react';
import ProductInfo from './ProductInfo';
import PriceInfo from './PriceInfo';
import Quantity from './Quantity';
import Images from './Images';
import ProductNav from './AdminProductNav';

class ProductForm extends Component {
  state = {
    step: 1,
    productName: '',
    sku: '',
    description: '',
    beforePrice: '',
    afterPrice: '',
    discount: '',
    quantity: '',
    imageUrl: []
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => (e) => {
    this.setState({ [input]: e.target.value });
  };

  // Handle image drop
  onDrop = input => (pictures) => {
    this.setState({ [input]: this.state.imageUrl.concat(pictures) });
  };

  render() {
    const { step } = this.state;
    const {
      productName, sku, description, beforePrice, afterPrice, discount, quantity, imageUrl
    } = this.state;
    const values = {
      productName, sku, description, beforePrice, afterPrice, discount, quantity, imageUrl
    };
    
    switch (step) {
      case 1:
        return (
          <div className="product__page">
            <ProductNav step={step} />
            <ProductInfo
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <div className="product__page">
            <ProductNav step={step} />
            <PriceInfo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 3:
        return (
          <div className="product__page">
            <ProductNav step={step} />
            <Quantity
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 4:
        return (
          <div className="product__page">
            <ProductNav step={step} />
            <Images
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              onDrop={this.onDrop}
              values={values}
            />
          </div>
        );
    }
  }
}

export default ProductForm;
