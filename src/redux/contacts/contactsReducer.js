import * as actions from "./contactsActionTypes";
import { createReducer } from "@reduxjs/toolkit";

const contactsReducer = createReducer([], {
  [actions.add]: (state, action) => [...state, action.payload],

  [actions.remove]: (state, action) =>
    state.filter((contact) => {
      return contact.id !== action.payload;
    }),
});

export default contactsReducer;
