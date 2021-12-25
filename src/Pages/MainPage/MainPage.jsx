import React, { Component } from "react";
import "../MainPage/MainPage.css";
import CardShowCase from "../../Components/CardShowCase/CardShowCase";

export default class MainPage extends Component {
  state = { cards: this.props.cards, currentIndex: 0 };

  moveCards = (e) => {
    const { cards, currentIndex } = this.state;
    const { action } = e.target.dataset;
    if (action === "next" && currentIndex !== cards.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 });
      console.log("next");
    }
    if (action === "back" && currentIndex !== 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  render() {
    const { cards, currentIndex } = this.state;
    console.log(cards[currentIndex]);
    return (
      <div className="MainPage">
        <button>Shuffle</button>
        <CardShowCase card={cards[currentIndex]} />
        <div className="bottom-btn-holder">
          <button onClick={this.moveCards} data-action="back" className="back">
            back
          </button>
          <button onClick={this.moveCards} data-action="next" className="next">
            next
          </button>
        </div>
      </div>
    );
  }
}
