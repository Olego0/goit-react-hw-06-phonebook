import * as actions from "./contactsActionTypes";
import { v4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addAction = createAction(actions.add, (obj) => ({
  payload: {
    id: v4(),
    name: obj.name,
    number: obj.number,
  },
}));

export const removeAction = createAction(actions.remove)

// export const removeAction = (id) => {
//   return {
//     type: actions.remove,
//     payload: id,
//   };
// };
