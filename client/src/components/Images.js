import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

class Images extends Component {
    continue = (e) => {
      e.preventDefault();
      console.log(this.props.values)
    };
    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        const { onDrop } = this.props;
      return (
        <div className="tab__page">
           <div className="tab__button">
               <button onClick={this.previous}>
               <i className="fas fa-arrow-left" />previous
            </button>
                <button onClick={this.continue}>
                    Submit
                  <i className="fas fa-arrow-right" />
                </button>
              </div>
           <h1>Images Information</h1>
           <hr />
           <div className="tab__form">
                      <div className="file__label">
                      <ImageUploader
                      className="image__file"
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={onDrop('imageUrl')}
                            imgExtension={['.jpg', '.gif', '.png']}
                            maxFileSize={5242880}
                            withPreview={true}
                            fileTypeError='is not supported file extension'
                            singleImage={true}
                        />
                    </div>             
               </div>
         </div>
      );
    }
}
export default Images;