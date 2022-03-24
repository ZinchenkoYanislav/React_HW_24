import React, { Component } from "react";
import './NavLeft.css'

export default class NavLeft extends Component {
  render() {
    return (
      <ul className="NavLeftUl ">
        <li className="NavLefLi">
          <a className="active" href="#home">
            Man
          </a>
        </li>
        <li className="NavLefLi">
          <a href="#news">Woman</a>
        </li>
        <li className="NavLefLi">
          <a href="#contact">Fashion 2022</a>
        </li>
        <li className="NavLefLi">
          <a href="#about">Kids</a>
        </li>
      </ul>
    );
  }
}
