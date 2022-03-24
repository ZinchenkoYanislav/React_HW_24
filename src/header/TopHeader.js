import React, { Component } from "react";
import './TopHeader.css'
import imglogo from '../img/top/logo.png'
import imgJoin from '../img/top/join.png'
import imgSign from '../img/top/sign.png'
import imgBag from '../img/top/bag.png'

export default class TopHeader extends Component {
  render() {
    return (
      <header className="d-flex" role="banner">
        <div className="container ">
          <div className="row">
            <div className="col-7 align-self-center">
              <img src={imglogo} alt=""></img>
            </div>
            <div className="col-5">
              <button type="button" className="btn btn-light btn-header">
                <img src={imgJoin} alt=""></img>
              </button>
              <button type="button" className="btn btn-light btn-header mr-3">
                <img src={imgSign} alt=""></img>
              </button>
              <button type="button" className="btn btn-light btn-header">
                <span className="text-danger"> Shoping Bag </span> <span>(0)</span>{" "}
                <img src={imgBag} alt=""></img>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
