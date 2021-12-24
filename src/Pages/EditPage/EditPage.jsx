import React, { Component, createRef } from "react";
import "../EditPage/EditPage.css";
import Form from "../../Components/ActionForm/Form";
import SmallCard from "../../Components/SmallCard/SmallCard";

export default class EditPage extends Component {
  state = { currentCard: {}, add: false };

  topPageRef = createRef();

  executeScroll = () => this.topPageRef.current.scrollIntoView();

  addHandler = (card) => {
    this.props.addHandler(card);
    this.resetState();
  };

  deleteHandler = () => {
    this.props.deleteHandler(this.state.currentCard);
    this.resetState();
  };

  updateHandler = (card) => {
    this.props.updateHandler(card);
    this.resetState();
  };

  createHandler = () => {
    this.setState({ add: true, currentCard: {} });
  };

  resetState = () => {
    this.setState({ currentCard: {}, add: false });
  };

  cardClickHandler = (card) => {
    this.setState({ add: false, currentCard: card });
    this.executeScroll();
  };

  renderSmallCards = () => {
    if (!this.props.flashCards) return;
    return this.props.flashCards.map((card) => {
      return <SmallCard key={card.id} card={card} cardClick={() => this.cardClickHandler(card)} />;
    });
  };

  renderForm = () => {
    if (this.state.add) {
      return <Form submitHandler={this.addHandler} cancelHandler={this.resetState} />;
    }
    if (this.state.currentCard.id) {
      return (
        <Form
          card={this.state.currentCard}
          deleteHandler={this.deleteHandler}
          submitHandler={this.updateHandler}
          cancelHandler={this.resetState}
        />
      );
    }
  };

  render() {
    return (
      <div ref={this.topPageRef}>
        {this.renderForm()}
        <div className="add-button-holder">
          <button onClick={this.createHandler}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="SmallCardsHolder">{this.renderSmallCards()}</div>
        {/* <Form submitHandler={this.addHandler} /> */}
        {/* <Form card={this.props.flashCards[0]} submitHandler={this.updateHandler} /> */}
      </div>
    );
  }
}
