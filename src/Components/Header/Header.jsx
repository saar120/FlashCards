import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link className="nav-btn" to="/">
          Flash Cards
        </Link>
        <Link className="nav-btn" to="/edit">
          Manage Cards
        </Link>
      </div>
    );
  }
}
