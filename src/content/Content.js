import React, { Component } from "react";
import NavLeft from "./NavLeft/NavLeft";
import "./Content.css";
import ProductList from "./ProductList/ProductList";

export default class Content extends Component {
  render() {
    return (
      <div className="container-fluid containerContent">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-3 mt-2">
            <NavLeft />
          </div>
          <div className="col-7 mt-2">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}
