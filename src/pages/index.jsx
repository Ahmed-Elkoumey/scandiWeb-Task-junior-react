import React, { Component } from "react";

// import Routing
import { Routes, Route } from "react-router-dom";

// import Components
import Cart from "./Cart";
import Category from "./Category";
import Clothes from "./Clothes";
import Page404 from "./Pages404";
import ProductDetails from "./ProductDetails";
import Tech from "./Tech";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.handleDataChange = this.handleDataChange.bind(this);
    this.state = { product: [] };
  }

  handleDataChange(newData) {

    this.setState({ product :[...this.state.product,newData] });
    console.log(this.state.product)
  }

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Category
            product={this.state.product}
              handleDataChange={this.handleDataChange}
            />
          }
        />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/cart" element={<Cart product={this.state.product} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  }
}
