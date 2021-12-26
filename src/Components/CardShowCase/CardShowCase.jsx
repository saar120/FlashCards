import React, { Component } from "react";
import "../CardShowCase/CardShowCase.css";

export default class CardShowCase extends Component {
  state = { flipped: false };

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    return (
      <div className="CardShow" onClick={this.flipCard}>
        <div className={this.state.flipped ? "flipped" : ""}>
          <div className="card-front card">{this.props.card.answer}</div>
          <div className="card-back card">{this.props.card.question}</div>
        </div>
      </div>
    );
  }
}
