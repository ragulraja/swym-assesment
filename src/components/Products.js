import React, { Component } from "react";
import Product from "./Product/Product";
import InfinitScroll from "react-infinite-scroll-component";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      count: 2,
      start: 1,
      msg: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products.length !== this.state.users.length) {
      this.setState({
        users: this.props.products,
      });
    }
  }

  fetchNextUsers() {
    // this.setState({ count: this.state.count + 2 })
    // console.log("This.stat", this.state.count)
  }

  render() {
    let products = this.props.products.map((product) => {
      return <Product key={product.id.toString()} product={product} />;
    });

    let value = this.state.users.length
    console.log("newvalu", value - 10);

    return (
      <div className="Product-wrapper">
        <InfinitScroll
          dataLength={value}
          next={this.fetchNextUsers}
          hasMore={true}
          loader={<h4>Loading ... </h4>}
        >
          {products}
        </InfinitScroll>
      </div>
    );
  }
}

export default Products;
