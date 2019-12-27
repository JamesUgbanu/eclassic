import React, { Component } from 'react';
import Left from './LeftNav';

// eslint-disable-next-line react/prefer-stateless-function
class Products extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
    <main className="container__page">
        <Left />
        <div class="cloth_text">
            <h1>ALL CLOTHES</h1>

            <p>
                lorem ipsum  lorem ipsum lorem ipsum
                lorem ipsum lorem ipsum lorem ipsum
                lorem ipsum
            </p>
        </div>
        <div class="product__container">
        <div class="cloth_img">
           <img src="./images/lady-on-nike-sneaker.jpg" />
           <hr />
           <p>Hoody</p>
           <button>Add To Cart <span class="fa fa-arrow-right fa-1x"></span></button>  
        </div>
        <div class="cloth_img">
                <img src="./images/man-on-nike-sneaker.jpg" />
                <hr />
                <p>Hoody</p>
                <button>Add To Cart <span class="fa fa-arrow-right fa-1x"></span></button>   
        </div>
        <div class="cloth_img">
                <img src="./images/lady-on-nike-sneaker.jpg" />
                <hr />
                <p>Hoody</p>
                <button>Add To Cart <span class="fa fa-arrow-right fa-1x"></span></button> 
        </div>
        <div class="cloth_img">
                <img src="./images/man-on-nike-sneaker.jpg" />
                <hr />
                <p>Hoody</p>
                <button>Add To Cart <span class="fa fa-arrow-right fa-1x"></span></button>  
        </div>
        <div class="cloth_img">
                <img src="./images/lady-on-nike-sneaker.jpg" />
                <hr />
                <p>Hoody</p>
                <button>Add To Cart <span class="fa fa-arrow-right fa-1x"></span></button> 
        </div>
        <div class="cloth_img">
                <img src="./images/man-on-nike-sneaker.jpg" />
                <hr />
                <p>Hoody</p>
                <button>Add To Cart <span class="fa fa-arrow-right fa-1x"></span></button>  
        </div>
        <div class="cloth_img">
                <img src="./images/lady-on-nike-sneaker.jpg" />
                <hr />
                <p>Hoody</p>
                <button>Add To Cart <span class="fa fa-arrow-right fa-1x"></span></button> 
        </div>
        <div class="cloth_img">
                <img src="./images/man-on-nike-sneaker.jpg" />
                <hr />
                <p>Hoody</p>
                <button>Add To Cart <span class="fa fa-arrow-right fa-1x"></span></button>     
        </div>
    </div>
    </main>
    );
  }
}

export default Products;
