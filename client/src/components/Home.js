import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Left from './LeftNav';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
    <main className="container__section">
        <Left />
      <div className="container__box banner">
        <img className="banner__img" src="images/banner.png" />
        <div className="collection">
          <h1 className="main_text">Urban <br/> COLLECTION</h1>
          <Link to="/products"><span>see collection</span><i className="fa fa-arrow-right fa-1x" ></i>
           </Link>
        </div>
      </div>
      <div className="container__box">
        {/* <a href="#" className="box box__one"><p>Categories</p></a> */}
        <Link to="/products" className="box box__two"> <p>All Products</p></Link>
      </div>
    </main>
    );
  }
}

export default Home;
