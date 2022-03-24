import React, { Component } from "react";
import "./HeaderNav.css";

export default class HeaderNav extends Component {
  render() {
    return (
      <div className="nav HeaderNav">
        <div className="col-4"></div>
        <div className="d-flex align-items-center">
          <a href="#" className="badge badge-dark ml-5 HeaderA">
            HOME
          </a>
          <a href="#" className="badge badge-dark ml-5 HeaderA">
            ABOUT US
          </a>
          <a href="#" className="badge badge-dark ml-5 HeaderA">
            CAREERS
          </a>
          <a href="#" className="badge badge-dark ml-5 HeaderA">
            CONTACT US
          </a>
          <a href="#" className="badge badge-dark ml-5 HeaderA">
            COMPANY REGISTRATION
          </a>
          <a href="#" className="badge badge-dark ml-5 HeaderA">
            WISH LIST
          </a>
        </div>
      </div>
    );
  }
}
