/* eslint-disable default-case */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductInfo from './ProductInfo';
import PriceInfo from './PriceInfo';
import Quantity from './Quantity';
import Images from './Images';
import ProductNav from './AdminProductNav';
import { addProduct } from '../actions/index';

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

  //Handle image upload
  handleFile = (file) => {
    this.setState({
      imageUrl: this.state.imageUrl.concat(file)
    });
  }


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
              prevStep={this.prevStep}
              values={this.state}
              handleFile={this.handleFile}
              submitForm={this.props.addNewProduct}
            />
          </div>
        );
    }
  }
}
const mapDispatchToProps = dispatch => ({
  addNewProduct: (data) => {
    dispatch(addProduct(data));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(ProductForm);
