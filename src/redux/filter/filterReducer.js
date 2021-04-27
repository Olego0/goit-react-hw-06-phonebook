import { createReducer } from "@reduxjs/toolkit";



const filterRedcuer = createReducer("", {
  ["filter/change"]: (state, action) => action.payload,
});

export default filterRedcuer;
