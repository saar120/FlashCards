import React, { Component } from "react";
import uniqid from "uniqid";

export default class Form extends Component {
  state = { answer: "", question: "", id: "" };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    if (!this.state.answer || !this.state.question) return;
    const id = this.state.id || uniqid();
    const card = { answer: this.state.answer, question: this.state.question, id };
    this.props.submitHandler(card);
  };

  componentDidMount = () => {
    if (this.props.card) {
      const { card } = this.props;
      this.setState({ answer: card.answer, question: card.question, id: card.id });
    }
  };
  render() {
    const action = this.props.card ? "Update" : "Add";
    return (
      <div>
        <div>
          <label>Question: </label>
          <textarea
            value={this.state.question}
            onChange={this.onChangeHandler}
            name="question"
            cols="20"
            rows="5"></textarea>
        </div>
        <div>
          <label>Answer: </label>
          <textarea
            value={this.state.answer}
            onChange={this.onChangeHandler}
            name="answer"
            cols="20"
            rows="5"></textarea>
        </div>
        <button onClick={this.submitHandler}>{action}</button>
      </div>
    );
  }
}
