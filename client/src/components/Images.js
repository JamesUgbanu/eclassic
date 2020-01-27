import React, { Component } from 'react';
import AWS from 'aws-sdk';
import { generateSerial } from './helpers';

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      message: '',
    };
  }

  componentDidMount() {
    AWS.config.update({
      region: process.env.REACT_APP_AWS_S3_BUCKET_REGION,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: process.env.REACT_APP_AWS_S3_IDENTITY_POOL_ID,
      }),
    });
  }

  statusMessage = (message) => {
    this.setState({ message });
  }

  onChangeFile = () => {
    this.setState({ loader: true });
    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: process.env.REACT_APP_AWS_S3_BUCKET_NAME },
    });
    const { files } = document.getElementById('photoupload');
    if (!files.length) {
      return this.statusMessage('Please choose a file to upload first.');
    }
    const file = files[0];
    const fileName = generateSerial() + file.name;
    s3.upload(
      {
        Key: fileName,
        Body: file,
        ACL: 'public-read',
      },
      (err, data) => {
        if (err) {
          this.statusMessage(err);
        } else {
          this.setState({ loader: false });
          this.props.handleFile([data.Location]);
        }
      }
    );
  };

  onSubmit = () => {
    const {
      imageUrl, productName, sku, description,
      afterPrice, discount, quantity
    } = this.props.values;
    let imageUrlObj = { ...imageUrl };

    const data = {
      prod_name: productName,
      sku_id: sku,
      short_desc: description,
      price: parseInt(afterPrice),
      discount: parseInt(discount),
      quantity: parseInt(quantity),
      image_url: imageUrlObj
    };
    this.props.submitForm(data);
  };

    previous = (e) => {
      e.preventDefault();
      this.props.prevStep();
    };

    render() {
      const { message, loader } = this.state;
      const { imageUrl } = this.props.values;
      const { loading } = this.props.loading;
      return (
        <div className="tab__page">
          <div className="tab__button">
            <button onClick={this.previous}>
              <i className="fas fa-arrow-left" />
previous
            </button>
            <button onClick={this.onSubmit} disabled={`${!imageUrl || loading ? 'disabled' : ''}`}>
                { loading ? <span>Loading...</span> : <span>Submit</span> }
              <i className="fas fa-arrow-right" />
            </button>
          </div>
          <h1>Images Information</h1>
          <hr />
          <div className="section__box">
            <div className="file__label">
              <input
                type="file"
                name="myfile"
                id="photoupload"
                className="image__file"
                onChange={this.onChangeFile}
              />
            </div>
            <div className="uploader__image">
              {loader ? <p>Loading...</p> : null}
            </div>
            <div className="upload__status">
              <span>{message > 0 ? message : null}</span>
            </div>
            <div className="image__table">
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                                  imageUrl ? (
                                    imageUrl.map((url, index) => (
                                      <tr key={index}>
                                        <td>
                                          <i className="fas fa-cross" />
                                          <img src={url} alt="fileUpload" />
                                        </td>
                                        <td>
                                          <button>
                                            <i className="fas fa-trash" />
                                     Delete Image
                                          </button>
                                        </td>
                                      </tr>
                                    ))
                                  ) : (
                                    <tr><td>No image</td></tr>
                                  )
                                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
}

export default Images;
