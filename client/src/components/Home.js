import React, { Component } from 'react';
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
          <a href="/products"><span>see collection</span><i className="fa fa-arrow-right fa-1x" ></i>
           </a>
        </div>
      </div>
      <div className="container__box">
        <a href="#" class="box box__one"><p>Categories</p></a>
        <a href="/products" class="box box__two"> <p>All Products</p></a>
      </div>
    </main>
    );
  }
}

export default Home;
