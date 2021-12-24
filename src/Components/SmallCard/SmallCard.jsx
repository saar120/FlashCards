import React, { Component } from "react";
import "../SmallCard/SmallCard.css";

export default class SmallCard extends Component {
  render() {
    const { question, answer } = this.props.card;
    return (
      <div className="SmallCard" onClick={this.props.cardClick}>
        <div>
          <span>Question:</span>
          <br />
          <br />
          {question}
        </div>
        <div>
          <span>Answer:</span>
          <br />
          <br />
          {answer}
        </div>
      </div>
    );
  }
}
