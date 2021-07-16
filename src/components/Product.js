import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageslength: 0,
    };
    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };
  }

  componentDidMount() {
    this.setState({ imageslength: this.props.length });
    console.log("this", this.state.imageslength);
  }

  render() {
    let variantImage =
      this.state.selectedVariantImage || this.props.product.images[0];

    return (
      <div
        className="Product"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "450px",
            border: "2px solid #d3d3d3",
            borderRadius: "5px",
          }}
        >
          {this.props.product.images.length ? (
            <img
              src={variantImage.src}
              alt={`${this.props.product.title} product shot`}
              height={450}
              width={350}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            />
          ) : null}

          <h3 className="Product__title" style={{ marginLeft: "10px" }}>
            {this.props.product.title}
          </h3>
          <span
            style={{
              display: "flex",
              marginLeft: "10px",
              textAlign: "center",
              fontSize: "14px",
              marginBottom: "20px",
              marginRight: "10px",
            }}
          >
            {this.props.product.description}
          </span>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Product;
