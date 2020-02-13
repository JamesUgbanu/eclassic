/* eslint-disable default-case */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';
import PriceInfo from './PriceInfo';
import Quantity from './Quantity';
import Images from './Images';
import ProductNav from './AdminProductNav';
import { addProduct, updateProduct } from '../actions/index';
import { findCurrentItem } from './helpers';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.validator = new SimpleReactValidator();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentProduct !== this.props.currentProduct) {
      if (this.props.pageNo && this.props.currentProduct) {
        const {
          prod_name, sku_id, price, short_desc, discount, quantity, image_url
        } = this.props.currentProduct;
        const imageUrl = image_url;
        this.setState({
          productName: prod_name,
          sku: sku_id,
          afterPrice: price,
          description: short_desc,
          discount: parseInt(discount),
          quantity,
          imageUrl: Object.values(imageUrl)
        });
      }
    }
  }

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

  // Handle image upload
  handleFile = (file) => {
    this.setState({
      imageUrl: this.state.imageUrl.concat(file)
    });
  }

  // Handle form submission
  handleSubmit = (formData) => {
    if (this.validator.allValid()) {
      if (!this.props.pageNo) {
        this.props.addNewProduct(formData);
        if (this.props.alertState.length) {
          this.setState({
            productName: '',
            sku: '',
            description: '',
            beforePrice: '',
            afterPrice: '',
            discount: '',
            quantity: '',
            imageUrl: []
          });
        }
      } else {
        this.props.updateProduct(formData, this.props.pageNo);
      }
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
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
              errorMsg={this.validator}
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
              errorMsg={this.validator}
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
              errorMsg={this.validator}
            />
          </div>
        );
      case 4:
        return (
          <div className="product__page">
            <ProductNav step={step} />
            <Images
              prevStep={this.prevStep}
              values={values}
              handleFile={this.handleFile}
              submitForm={this.handleSubmit}
              errorMsg={this.validator}
              pageNo={this.props.pageNo}
              loading={this.props.ajaxLoading}
            />
          </div>
        );
    }
  }
}

ProductForm.propTypes = {
  currentProduct: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  addNewProduct: (data) => {
    dispatch(addProduct(data));
  },
  updateProduct: (data, id) => {
    dispatch(updateProduct(data, id));
  }
});

const mapStateToProps = (state, ownProps) => {
  const currentProduct = state.products.length ? findCurrentItem(state.products, ownProps.pageNo) : null;
  return {
    currentProduct,
    ajaxLoading: state.ajaxLoading,
    alertState: state.alert,
    pageNo: ownProps.pageNo
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
