import React, { Component } from "react";

// import Routing
import { Routes, Route } from "react-router-dom";

// import Components
import Cart from "./Cart";
import Category from "./Category";
import Page404 from "./Pages404";
import ProductDetails from "./ProductDetails";

export default class index extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  }
}
