import React from "react";
import PropTypes from "prop-types";
import styles from "./Contacts.module.css";
import { connect } from "react-redux";
import * as contactActions from "../../redux/contacts/contactsAction";

function Contacts(props) {
  return (
    <div className={styles.box}>
      {props.contacts.map((contact) => (
        <div className={styles.contactBox}>
          <h2>Name: {contact.name}</h2>
          <h2>Num: {contact.number}</h2>
          <button
            onClick={() => props.deleteContact(contact.id)}
            className={styles.button}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
Contacts.propTypes = {
  contact: PropTypes.array,
  deleteContact: PropTypes.func,
};

const mapDispatchToProps = {
  deleteContact: contactActions.removeAction,
};

export default connect(null, mapDispatchToProps)(Contacts);
