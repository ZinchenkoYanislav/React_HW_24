import React, { Component } from "react";
import "./Search.css";
import searchProduct from "../img/search/search_product.png";

export default class Search extends Component {
  render() {
    return (
      <div className="d-flex search">
        <div className="container-fluid align-items-center">
          <div className="row align-items-center">
            <div className="blue col-1"></div>
            <div className="blue col-1">
              <img src={searchProduct} alt=""></img>
            </div>
            <div className="col-2 align-self-center">
              <input
                className="align-self-center mt-2"
                type="text"
                size="29"
              ></input>
            </div>
            <div className="col-1">
              <button className="searchBtn ml-5 mt-2"> </button>
            </div>
            <div className="col-4"></div>
            <div className="col-2">
              <button className="icon1 ml-5 mt-2"> </button>
              <button className="icon2 ml-3 mt-2"> </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
