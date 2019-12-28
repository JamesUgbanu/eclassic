import React, { Component } from 'react';
import AdminSideNav from './AdminSideNav';

// eslint-disable-next-line react/prefer-stateless-function
class AddProduct extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <main className="acc__main">
        <AdminSideNav />
        <div className="acc__container">
          <h1>
            <a href="/admin-products" className="fa  fa-arrow-left" />
                Product Table
          </h1>
          <div className="product__page">
            <div className="product__tab">
              <div className="tab__content">
                <i className="fas fa-info-circle" />
                <span>Information</span>
              </div>

              <div className="tab__content">
                <i className="fas fa-dollar-sign" />
                <span>Price</span>
              </div>

              <div className="tab__content">
                <i className="fas fa-book" />
                <span>SEO</span>
              </div>

              <div className="tab__content">
                <i className="fas fa-truck" />
                <span>Shipping</span>
              </div>

              <div className="tab__content">
                <i className="fas fa-image" />
                <span>images</span>
              </div>

              <div className="tab__content">
                <i className="fas fa-file" />
                <span>Quantities</span>
              </div>
            </div>

            <div className="tab__page">
              <div className="tab__button">
                <button>
                  <i className="fas fa-window-close" />
                    Cancel Changes
                </button>
                <button>
                  <i className="fas fa-save" />
                    Save Changes
                </button>
              </div>
              <h1>Product Information</h1>
              <hr />
              <div className="tab__form">
                {/* <!--Information Starts--> */}
                <form>
                  <div className="section__box">
                    <label>Type</label>
                    <div>
                      <input type="radio" id="product" name="product" value="Standard Product" />
                      <span>Standard Product</span>
                    </div>
                  </div>
                  <div className="section__box">
                    <label>Name</label>
                    <input type="text" placeholder="Nike shoe" />
                  </div>
                  <div className="section__box">
                    <label>SK</label>
                    <input type="text" placeholder="00345675" />
                  </div>
                  <div className="section__box">
                    <label>Description</label>
                    <textarea />
                  </div>
                </form>
                {/* <!--Information ends--> */}
                {/* <!--Price starts--> */}
                {/* <form>
                                <div class="section__box">
                                <legend>Before Price</legend>
                                <input type="text">
                                </div>
                                <div class="section__box">
                                        <legend>After Price</legend>
                                        <input type="text">
                                </div>
                                <div class="section__box">
                                        <legend>Discount in %</legend>
                                        <input type="number">
                                        </div>

                            </form> */}
                {/* <!--Price ends--> */}
                {/* <!--SEO starts--> */}
                {/* <form>
                    <div class="section__box">
                        <legend>Meta Title</legend>
                        <input type="text">
                    </div>
                    <div class="section__box">
                        <legend>Meta Description</legend>
                        <input type="text">
                    </div>
                    </form> */}
                {/* <!--SEO ends--> */}
                {/* <!--Shipping Starts--> */}
                {/* <form>
                    <div class="section__box">
                        <legend>Package Width(inches)</legend>
                        <input type="text">
                    </div>
                    <div class="section__box">
                        <legend>Package Height(inches)</legend>
                        <input type="text">
                    </div>
                    <div class="section__box">
                        <legend>Package Depth(inches)</legend>
                        <input type="text">
                    </div>
                    <div class="section__box">
                        <legend>Package Weight(lb)</legend>
                        <input type="text">
                    </div>
                    </form> */}
                {/* <!--Shipping ends--> */}
                {/* <!--Images starts--> */}
                {/* <form>
                    <div class="section__box">
                    <legend>Add a new image to this product</legend>
                    <div class="file__label">
                    <label for="file">  <i class="fas fa-plus"></i> Add File...</label>
                    <input type="file" name="file" id="file" class="image__file">
                    </div>
                    </div>
                    </form>
                    <div class="image__table">
                            <table>
                                <tr><th>Image</th> <th>Caption</th> <th>Position</th> <th>Cover</th> <th>none</th></tr>
                                <tr draggable="true"><td><i class="fas fa-cross"></i> <img src="images/lady-on-nike-sneaker.jpg"></td><td>puma1</td><td>1</td><td><input type="radio" id="cover" name="cover"></td><td><button><i class="fas fa-trash"></i>   Delete Thid Image</button></td></tr>
                                <tr draggable="true"><td><i class="fas fa-cross"></i> <img src="images/lady-on-nike-sneaker.jpg"></td><td>puma2</td><td>1</td><td><input type="radio" id="cover" name="cover"></td><td><button><i class="fas fa-trash"></i>   Delete Thid Image</button></td></tr>
                                <tr draggable="true"><td><i class="fas fa-cross"></i> <img src="images/lady-on-nike-sneaker.jpg"></td><td>puma3</td><td>1</td><td><input type="radio" id="cover" name="cover"></td><td><button><i class="fas fa-trash"></i>    Delete Thid Image</button></td></tr>
                                <tr draggable="true"><td><i class="fas fa-cross"></i> <img src="images/lady-on-nike-sneaker.jpg"></td><td>puma4</td><td>1</td><td><input type="radio" id="cover" name="cover"></td><td><button><i class="fas fa-trash"></i>  Delete Thid Image</button></td></tr>
                            </table>
                    </div> */}
                {/* <!-- Images ends--> */}
                {/* <!--Quantity starts--> */}
                {/* <form>
                   <div class="section__box">
                        <legend>quantity</legend>
                        <input type="number" name="age">
                   </div>
                </form> */}
                {/* <!--Quantity ends--> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AddProduct;
