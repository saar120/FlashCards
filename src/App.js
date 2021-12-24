import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import EditPage from "./Pages/EditPage/EditPage";
import Header from "./Components/Header/Header";

export default class App extends Component {
  state = { flashCards: [], currentFlashCards: {} };

  setCards = () => {
    localStorage.getItem("flashCards") &&
      this.setState({ flashCards: JSON.parse(localStorage.getItem("flashCards")) }, () => {
        console.log(this.state.flashCards);
      });
  };

  addCard = (card) => {
    const flashCards = [...this.state.flashCards, card];
    localStorage.setItem("flashCards", JSON.stringify(flashCards));
    this.setCards();
  };

  updateCard = (card) => {
    const flashCards = [...this.state.flashCards];
    const cardToUpdate = flashCards.find((oldCard) => oldCard.id === card.id);
    flashCards.splice(flashCards.indexOf(cardToUpdate), 1, card);
    localStorage.setItem("flashCards", JSON.stringify(flashCards));
    this.setCards();
  };

  componentDidMount = () => {
    this.setCards();
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/edit" exact>
              <EditPage addHandler={this.addCard} updateHandler={this.updateCard} flashCards={this.state.flashCards} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
