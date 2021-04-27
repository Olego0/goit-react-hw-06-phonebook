import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contactsReducer";
import filterRedcuer from "./filter/filterReducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterRedcuer,
  },
});

export default store;
