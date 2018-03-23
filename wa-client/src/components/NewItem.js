import React, { Component } from "react";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from "cloudinary-react";
import cloudinary from "cloudinary-core";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item_num: "",
      name: "",
      description: "",
      price: 0,
      specs: "",
      image: "",
      availability: true,
      linkseses: ""
    };

    this.uploadWidget = this.uploadWidget.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.buildSpecs = this.buildSpecs.bind(this);
    
  }

  buildSpecs(){

    const specs = `[{"material": "${this.state.material}","width": "${this.state.width}", "height": "${this.state.height}", "movement": "${this.state.movement}"}]`

    this.setState({specs: specs});
  }


  uploadWidget() {
    const that = this;
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "wristing",
        upload_preset: "mftaihz1",
        theme: "minimal",
        sources: ["local"],
        unsigned: true
      },
      function(error, result) {
        console.log(error), printImagePreviews(result);
      }
    );

    function printImagePreviews(result) {
      const linkData = result.map(link => {
        var styles = {
          background: `url('${link.secure_url}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        };

        return (
          <div>
          <div
            className="new-item-preview"
            style={styles}
          />
          <div className="upload-link-parent">
          <p className="upload-link">{link.secure_url}</p>
          </div>
          </div>
        );
      });

      console.log(linkData)
    that.setState({ linkseses: linkData });

    }
  }

  handleSubmit(){

    const data = this.state

    this.props.postItem(data)
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value }, this.buildSpecs);
  }

  render() {
    return (
      <div id="new-item-div">
        <h1>Add a Watch</h1>
        <div id="new-item-line-div-thingy">
        <div id="preview-div">{this.state.linkseses}</div>
          <div>
            <input
              className="new-item-input"
              type="number"
              name="item_num"
              placeholder="Item Number"
              onChange={this.handleChange}
            />
            <input
              className="new-item-input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
            <textarea
              className="new-item-input"
              type="text"
              name="description"
              placeholder="Description"
              onChange={this.handleChange}
            />
            <input
              className="new-item-input"
              type="number"
              name="price"
              placeholder="Price"
              onChange={this.handleChange}
            />
            <input
              className="new-item-input"
              type="text"
              name="material"
              placeholder="Material"
              onChange={this.handleChange}
            />
            <input
              className="new-item-input"
              type="text"
              name="width"
              placeholder="Case Diameter"
              onChange={this.handleChange}
            />
            <input
              className="new-item-input"
              type="text"
              name="height"
              placeholder="Case Height"
              onChange={this.handleChange}
            />
            <input
              className="new-item-input"
              type="text"
              name="movement"
              placeholder="Movement"
              onChange={this.handleChange}
            />
            <textarea
              className="new-item-input"
              type="text"
              name="image"
              onChange={this.handleChange}
            />

            <a id="upload-widget-opener" onClick={this.uploadWidget.bind(this)}>
              UPLOAD IMAGES
            </a>
          </div>
        </div>
      </div>
    );
  }
}
