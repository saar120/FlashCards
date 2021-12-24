import React, { Component } from "react";
import uniqid from "uniqid";
import "../ActionForm/Form.css";

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
      <div className="Form">
        <div className="wrapper">
          <div className="button-holder">
            <button onClick={this.props.cancelHandler} className="exit">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div>
            <div className="text">Question: </div>
            <textarea
              value={this.state.question}
              onChange={this.onChangeHandler}
              name="question"
              cols="20"
              rows="5"></textarea>
          </div>
          <div>
            <div className="text">Answer: </div>
            <textarea
              value={this.state.answer}
              onChange={this.onChangeHandler}
              name="answer"
              cols="20"
              rows="5"></textarea>
          </div>
          <div className="bottom-button-holder">
            {this.props.card && (
              <button>
                <i className="fas fa-trash"></i>
              </button>
            )}
            <button onClick={this.submitHandler}>{action}</button>
          </div>
        </div>
      </div>
    );
  }
}
