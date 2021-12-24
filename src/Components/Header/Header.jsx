import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">Cards</Link>
        <h2>Flash Cards !</h2>
        <Link to="/edit">Manage Cards</Link>
      </div>
    );
  }
}
