import React, { Component } from "react";
import "./products.scss";
import { gql } from "apollo-boost";
// import { withApollo } from "@apollo/react-hoc";

export const getfirst = gql`
  {
    products(first: 3) {
      edges {
        node {
          id
          handle
          variants(first: 3) {
            edges {
              node {
                id
                displayName
              }
            }
          }
        }
      }
    }
  }
`;

console.log("dev", getfirst);

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageslength: 0,
      isLoading: true,
    };

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };
  }

  componentDidMount() {
    this.setState({ imageslength: this.props.length });
    this.timer = setTimeout(
      () => this.setState((prevState) => ({ isLoading: !prevState.isLoading })),
      3500
    );

    // fetch("http://dosacamp-2.myshopify.com/api/2021-07/graphql.json", {
    //   mode: 'no-cors',
    //   method: "Post",
    //   headers: {
    //     "X-Shopify-Access-Token": "65e8b0331a4799591e9c12b653e02e29",
    //     "Content-type": "application/json",
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //     return response;
    //   })
    //   .then((json) => {
    //     console.log(json);
    //   });
  }

  //   componentWillUnmount() {
  //     clearInterval(this.timer);
  // }

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
            background: "#fff",
            marginTop: "30px",
          }}
        >
          <h3 className="Product__title" style={{ marginLeft: "10px" }}>
            {this.props.product.title}
          </h3>
          {this.props.product.images.length ? (
            <div
              style={{
                border: "1px solid #d3d3d3",
                borderRight: "none",
                borderLeft: "none",
              }}
            >
              {this.state.isLoading === true ? (
                <img
                  src={variantImage.src}
                  alt={`${this.props.product.title} product shot`}
                  height={550}
                  width={440}
                  style={{
                    display: "flex",
                    // flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "15px",
                    marginTop: "15px",
                    marginLeft: "5px",
                  }}
                />
              ) : (
                <div class="sk-circle">
                  <div class="sk-circle1 sk-child"></div>
                  <div class="sk-circle2 sk-child"></div>
                  <div class="sk-circle3 sk-child"></div>
                  <div class="sk-circle4 sk-child"></div>
                  <div class="sk-circle5 sk-child"></div>
                  <div class="sk-circle6 sk-child"></div>
                  <div class="sk-circle7 sk-child"></div>
                  <div class="sk-circle8 sk-child"></div>
                  <div class="sk-circle9 sk-child"></div>
                  <div class="sk-circle10 sk-child"></div>
                  <div class="sk-circle11 sk-child"></div>
                  <div class="sk-circle12 sk-child"></div>
                </div>
              )}
            </div>
          ) : null}
          <div className="d-flex">
            <b>Product Description:</b>
            <span
              style={{
                display: "flex",
                marginLeft: "10px",
                textAlign: "justify",
                fontSize: "14px",
                marginBottom: "20px",
                marginRight: "10px",
                marginTop: "15px",
              }}
            >
              {this.props.product.description}
            </span>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Product;
