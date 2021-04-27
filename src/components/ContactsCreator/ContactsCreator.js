import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactsCreator.module.css";
import { connect } from "react-redux";
import * as contactActions from "../../redux/contacts/contactsAction";
class ContactsCreator extends Component {
  state = {
    text: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addContact({ name: this.state.text, number: this.state.number });
  };

  textChange = (e) => {
    this.setState({ text: e.target.value });
  };

  numberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.box}>
        <input
          type="input"
          onChange={this.textChange}
          placeholder="Name"
          className={styles.input}
        />

        <input
          type="number"
          placeholder="Number"
          onChange={this.numberChange}
          className={styles.input}
        />

        <button className={styles.button}>Add contact</button>
      </form>
    );
  }
  static propTypes = {
    addContact: PropTypes.func,
  };
}

const mapDispatchToProps = {
  addContact: contactActions.addAction,
};

export default connect(null, mapDispatchToProps)(ContactsCreator);
