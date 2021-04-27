import styles from "./App.module.css";
import Contacts from "../Contacts/Contacts";
import React, { Component } from "react";
import ContactsCreator from "../ContactsCreator/ContactsCreator";
import Filter from "../Filter/Filter";
import { connect } from "react-redux";

class App extends Component {
  handleFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <ContactsCreator />
        <Filter />
        <Contacts contacts={this.props.contacts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    ),
  };
};

export default connect(mapStateToProps)(App);
