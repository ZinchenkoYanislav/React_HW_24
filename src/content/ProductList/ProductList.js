import React, { Component } from "react";
import "./ProductList.css";
import kidsMoonColorblock from "../../img/product-list/kids-MoonColorblock.png";
import serax from "../../img/product-list/serax.png";
import IMG3 from "../../img/product-list/3.png"

export default class ProductList extends Component {
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-3">
        {/* <!-- 1 --> */}
        <div className="col mb-4">
          <div className="card h-100">
            <img
              src={kidsMoonColorblock}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              {/* <!-- card title --> */}
              <h5 className="card-title">Kids Moon Colorblock Footed Tights</h5>
              <div className="container">
                <div className="row">
                  <div className="col-5">
                    {/* <!-- price --> */}
                    <p>
                      <strong className="ProductPrice">
                        $ <span>8.99</span>
                      </strong>
                    </p>
                  </div>
                  {/* <!-- button --> */}
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-danger ProductGetIt"
                    >
                      GET IT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card h-100">
            <img src={serax} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Kids Moon Colorblock Footed Tights</h5>
              <div className="container">
                <div className="row">
                  <div className="col-5">
                    <p>
                      <strong className="ProductPrice">
                        $ <span>8.99</span>
                      </strong>
                    </p>
                  </div>

                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-danger ProductGetIt"
                    >
                      GET IT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className="card h-100">
            <img src={IMG3} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Kids Moon Colorblock Footed Tights</h5>
              <div className="container">
                <div className="row">
                  <div className="col-5">
                    <p>
                      <strong className="ProductPrice">
                        $ <span>8.99</span>
                      </strong>
                    </p>
                  </div>

                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-danger ProductGetIt"
                    >
                      GET IT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
