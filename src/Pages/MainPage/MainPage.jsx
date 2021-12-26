import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../MainPage/MainPage.css";
import CardShowCase from "../../Components/CardShowCase/CardShowCase";

export default class MainPage extends Component {
  state = { cards: this.props.cards, currentIndex: 0 };

  moveCards = (e) => {
    const { cards, currentIndex } = this.state;
    const { action } = e.target.dataset;
    if (action === "next" && currentIndex !== cards.length - 1) {
      this.setState({ currentIndex: currentIndex + 1 });
    }
    if (action === "back" && currentIndex !== 0) {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  };

  shuffleCards = () => {
    const newCards = [...this.state.cards];
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newCards[i];
      newCards[i] = newCards[j];
      newCards[j] = temp;
    }
    this.setState({ cards: newCards });
  };

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  componentDidMount = () => {
    this.setState({ cards: this.props.cards });
  };

  render() {
    const { cards, currentIndex } = this.state;
    return (
      <div className="MainPage">
        {cards.length === 0 ? (
          <h2>
            No Cards
            <br />
            <Link to="/edit">Go Create Some</Link>
          </h2>
        ) : (
          <>
            <button className="shuffle" onClick={this.shuffleCards}>
              <i className="fas fa-random"></i>
            </button>
            <CardShowCase key={cards[currentIndex].id} card={cards[currentIndex]} />
            <div className="bottom-btn-holder">
              <button onClick={this.moveCards} data-action="back" className="back">
                back
              </button>
              <button onClick={this.moveCards} data-action="next" className="next">
                next
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
