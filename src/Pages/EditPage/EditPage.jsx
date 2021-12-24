import React, { Component } from "react";
import Form from "../../Components/ActionForm/Form";

export default class EditPage extends Component {
  addHandler = (card) => {
    this.props.addHandler(card);
  };

  updateHandler = (card) => {
    this.props.updateHandler(card);
  };

  render() {
    return (
      <div>
        <Form submitHandler={this.addHandler} />
        <Form card={this.props.flashCards[0]} submitHandler={this.updateHandler} />
      </div>
    );
  }
}
